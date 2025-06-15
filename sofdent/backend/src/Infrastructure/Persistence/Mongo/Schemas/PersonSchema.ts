import mongoose from "mongoose";
import { Counter } from "../../../../Domain/Counter";

const personSchema = new mongoose.Schema(
  {
    idPerson: { type: Number, required: true },
    names: String,
    lastNames: String,
    birthDate: String, // Podrías usar Date si prefieres
    address: String,
    phone: String,
    email: String,
    role: String,
  },
  {
    timestamps: true, // agrega createdAt y updatedAt automáticamente
  }
);

personSchema.pre("save", async function (next) {
  if (this.isNew) {
    const personCounter = await Counter.findByIdAndUpdate(
      { _id: "idPerson" },
      { $inc: { seq: 1 } },
      { upsert: true, new: true }
    );
    this.idPerson = personCounter?.seq;
  }
  next();
});

export const PersonModel = mongoose.model("Person", personSchema);
