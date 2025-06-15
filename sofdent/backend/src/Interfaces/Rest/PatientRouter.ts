// src/interfaces/rest/patientRouter.ts
import express from "express";
import {
  getPatientById,
  getAllPatients,
  createPatient,
  updatePatient,
  deletePatient,
} from "../../Infrastructure/Controllers/PatientController";

export const patientRouter = express.Router();

patientRouter.get("/", getAllPatients);
patientRouter.get("/:id", getPatientById);
patientRouter.post("/", createPatient);
patientRouter.put("/", updatePatient);
patientRouter.delete("/:id", deletePatient);
