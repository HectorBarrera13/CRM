import mongoose from "mongoose";
import { Counter } from "../../../../Domain/Counter";

const doctorSchema = new mongoose.Schema({
  idDoctor: { type: Number, required: true, unique: true },
  speciality: String,
  color: String,
  idPerson: {
    type: Number,
    ref: "Person",
    required: true,
    unique: true,
  },
  debt: {
    type: Number,
    default: 0,
  },
});

// Autoincrementar idDoctor al guardar un nuevo Doctor
doctorSchema.pre("save", async function (next) {
  if (this.isNew) {
    const doctorCounter = await Counter.findByIdAndUpdate(
      { _id: "idDoctor" },
      { $inc: { seq: 1 } },
      { upsert: true, new: true }
    );
    this.idDoctor = doctorCounter?.seq;
  }
  next();
});

export const DoctorModel = mongoose.model("Doctor", doctorSchema);
