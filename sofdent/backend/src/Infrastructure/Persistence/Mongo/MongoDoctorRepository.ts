import mongoose from "mongoose";
import { Counter } from "../../../Domain/Counter";
import { DoctorRepository } from "../../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../../Domain/Entities/Doctor";

const doctorSchema = new mongoose.Schema({
  idDoctor: { type: Number, required: true, unique: true },
  speciality: String,
  color: String,
  person: {
    idPerson: { type: Number, required: true, unique: true },
    names: String,
    lastName: String,
    birthDate: String,
    address: String,
    phone: String,
    email: String,
  },
});

//metodo para autoincrementar el idDoctor
doctorSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "iddoctor" },
      { $inc: { seq: 1 } },
      { upsert: true, new: true }
    );
    this.idDoctor = counter.seq;
  }
  next();
});

const DoctorModel = mongoose.model("Doctor", doctorSchema);

export class MongoDoctorRepository implements DoctorRepository {
  async save(doctor: Doctor): Promise<void> {
    await DoctorModel.create(doctor);
  }

  async findById(id: string): Promise<Doctor | null> {
    return DoctorModel.findOne({ idDoctor: Number(id) }).lean();
  }

  async findAll(): Promise<Doctor[]> {
    return DoctorModel.find().lean();
  }

  async update(doctor: Doctor): Promise<void> {
    await DoctorModel.updateOne({ idDoctor: doctor.idDoctor }, doctor);
  }

  async delete(doctor: Doctor): Promise<void> {
    await DoctorModel.deleteOne({ idDoctor: doctor.idDoctor });
  }

  async findByName(name: string): Promise<Doctor[]> {
    return DoctorModel.find({
      "person.names": { $regex: name, $options: "i" },
    }).lean();
  }

  async findBySpeciality(speciality: string): Promise<Doctor[]> {
    return DoctorModel.find({ speciality }).lean();
  }

  async findWithUpcomingAppointments(): Promise<Doctor[]> {
    return DoctorModel.find({
      upcomingAppointments: { $exists: true, $ne: [] },
    }).lean();
  }

  async findUpcomingAppointmentsByDoctorId(
    doctorId: string
  ): Promise<Doctor[]> {
    return DoctorModel.find({
      idDoctor: doctorId,
      upcomingAppointments: { $exists: true, $ne: [] },
    }).lean();
  }
}
