import express from "express";
import {
  getDoctorById,
  getAllDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../../Infrastructure/Controllers/DoctorController";

export const doctorRouter = express.Router();

doctorRouter.get("/", getAllDoctors);
doctorRouter.get("/:id", getDoctorById);
doctorRouter.post("/", createDoctor);
doctorRouter.put("/", updateDoctor);
doctorRouter.delete("/:id", deleteDoctor);
