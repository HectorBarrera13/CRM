import mongoose from "mongoose";
import { Counter } from "../../../../Domain/Counter";

const patientSchema = new mongoose.Schema({
  idPatient: { type: Number, required: true, unique: true },
  lastAppointment: String,
  idPerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
    required: true,
  },
});

//metodo para autoincrementar el idPatient
patientSchema.pre("save", async function (next) {
  if (this.isNew) {
    const patientCounter = await Counter.findByIdAndUpdate(
      { _id: "idPatient" },
      { $inc: { seq: 1 } },
      { upsert: true, new: true }
    );
    this.idPatient = patientCounter?.seq;
  }

  next();
});

export const PatientModel = mongoose.model("Patient", patientSchema);
