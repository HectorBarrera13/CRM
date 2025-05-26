import { Appointment } from "../../../Domain/Entities/Appointment";
import { AppointmentRepository } from "../../../Domain/Repository/AppointmentRepository";
import mongoose from "mongoose";
import { Counter } from "../../../Domain/Counter";

const appointmentSchema = new mongoose.Schema({
  idAppointment: { type: Number, required: true, unique: true },
  date: String,
  timeStart: String,
  timeEnd: String,
  patientId: { type: Number, required: true },
  doctorId: { type: Number, required: true },
});

appointmentSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "idAppointment" },
      { $inc: { seq: 1 } },
      { upsert: true, new: true }
    );
    this.idAppointment = counter.seq;
  }
  next();
});

const AppointmentModel = mongoose.model("Appointment", appointmentSchema);

export class MongoAppointmentRepository implements AppointmentRepository {
  async save(appointment: Appointment): Promise<void> {
    await AppointmentModel.create(appointment);
  }

  async findById(id: string): Promise<Appointment | null> {
    return AppointmentModel.findOne({ idAppointment: Number(id) }).lean();
  }

  async findAll(): Promise<Appointment[]> {
    return AppointmentModel.find().lean();
  }

  async update(appointment: Appointment): Promise<void> {
    await AppointmentModel.updateOne(
      { idAppointment: appointment.idAppointment },
      appointment
    );
  }

  async delete(appointment: Appointment): Promise<void> {
    await AppointmentModel.deleteOne({
      idAppointment: appointment.idAppointment,
    });
  }

  async findAppointmentsOfDay(day: string): Promise<Appointment[]> {
    return AppointmentModel.find({ date: day }).lean();
  }

  async findAppointmentsByPatientId(patientId: string): Promise<Appointment[]> {
    return AppointmentModel.find({ patientId: Number(patientId) }).lean();
  }

  async findAppointmentsByDoctorId(doctorId: string): Promise<Appointment[]> {
    return AppointmentModel.find({ doctorId: Number(doctorId) }).lean();
  }
}
