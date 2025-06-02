// src/infrastructure/persistence/MongoPatientRepository.ts
import { PatientRepository } from "../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../Domain/Entities/Patient";
import mongoose from "mongoose";
import { Counter } from "../../../Domain/Counter";

const patientSchema = new mongoose.Schema({
  idPatient: { type: Number, required: true, unique: true },
  lastAppointment: String,
  upcomingAppointments: [String],
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

//metodo para autoincrementar el idPatient
patientSchema.pre("save", async function (next) {
  if (this.isNew) {
    // Generar idPatient
    const patientCounter = await Counter.findByIdAndUpdate(
      { _id: "idPatient" },
      { $inc: { seq: 1 } },
      { upsert: true, new: true }
    );
    this.idPatient = patientCounter?.seq;

    // Generar idPerson
    const personCounter = await Counter.findByIdAndUpdate(
      { _id: "idPerson" },
      { $inc: { seq: 1 } },
      { upsert: true, new: true }
    );

    // Si this.person no existe, se crea con idPerson
    if (!this.person) {
      this.person = {
        idPerson: personCounter?.seq || 1,
      };
    } else {
      this.person.idPerson = personCounter?.seq || 1;
    }
  }

  next();
});

const PatientModel = mongoose.model("Patient", patientSchema);

export class MongoPatientRepository implements PatientRepository {
  async save(patient: Patient): Promise<void> {
    await PatientModel.create(patient);
  }

  async findById(id: string): Promise<Patient | null> {
    return PatientModel.findOne({ idPatient: Number(id) }).lean();
  }

  async findAll(): Promise<Patient[]> {
    return PatientModel.find().lean();
  }

  async update(patient: Patient): Promise<void> {
    await PatientModel.updateOne({ idPatient: patient.idPatient }, patient);
  }

  async delete(patient: Patient): Promise<void> {
    await PatientModel.deleteOne({ idPatient: patient.idPatient });
  }

  async findInactiveSince(date: String): Promise<Patient[]> {
    return PatientModel.find({ lastAppointment: date }).lean();
  }

  async findWithUpcomingAppointments(): Promise<Patient[]> {
    return PatientModel.find({
      upcomingAppointments: { $exists: true, $ne: [] },
    }).lean();
  }
  async findByName(name: string): Promise<Patient[]> {
    return PatientModel.find({
      "person.names": { $regex: name, $options: "i" },
    }).lean();
  }
}

//return (await PatientModel.find()).map(doc => new Patient(
//doc.idPatient,
//doc.person, // o adaptarlo a tu clase `Person`
//doc.lastAppointment,
//doc.upcomingAppointments ?? []
//));
