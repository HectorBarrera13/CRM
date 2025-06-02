import { Appointment } from "../../../Domain/Entities/Appointment";
import { AppointmentRepository } from "../../../Domain/Repository/AppointmentRepository";
import mongoose from "mongoose";
import { Counter } from "../../../Domain/Counter";

const appointmentSchema = new mongoose.Schema({
  idAppointment: { type: Number, unique: true },
  title: String,
  description: String,
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
  save(entity: Appointment): Promise<void> {
    throw new Error("Method not implemented.");
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
      {
        $set: {
          timeStart: appointment.timeStart,
          timeEnd: appointment.timeEnd,
        },
      }
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

  async updateAppointmentTime(
    id: string,
    start: string,
    end: string
  ): Promise<void> {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const date = startDate.toISOString().split("T")[0]; // yyyy-mm-dd
    const timeStart = startDate.toTimeString().slice(0, 5); // HH:MM
    const timeEnd = endDate.toTimeString().slice(0, 5); // HH:MM

    await AppointmentModel.updateOne(
      { idAppointment: parseInt(id) },
      {
        $set: {
          date,
          timeStart,
          timeEnd,
        },
      }
    );
  }
}
