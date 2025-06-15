import mongoose from "mongoose";
import { Counter } from "../../../../Domain/Counter";

const appointmentSchema = new mongoose.Schema({
  idAppointment: { type: Number, unique: true },
  title: String,
  description: String,
  date: String,
  timeStart: String,
  timeEnd: String,
  idPatient: { type: Number, required: true },
  idDoctor: { type: Number, required: true },
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

export const AppointmentModel = mongoose.model(
  "Appointment",
  appointmentSchema
);
