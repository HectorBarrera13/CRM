import mongoose from "mongoose";
import { Counter } from "../../../../Domain/Counter";

const clinicSchema = new mongoose.Schema({
  idClinic: { type: Number, required: true, unique: true },
  name: String,
  address: String,
});

clinicSchema.pre("save", async function (next) {
  if (this.isNew) {
    const ClinicCounter = await Counter.findByIdAndUpdate(
      { _id: "idClinic" },
      { $inc: { seq: 1 } },
      { upsert: true, new: true }
    );
    this.idClinic = ClinicCounter?.seq;
  }
  next();
});

export const clinicModel = mongoose.model("Clinic", clinicSchema);
