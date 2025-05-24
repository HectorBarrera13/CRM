// src/interfaces/rest/patientRouter.ts
import express from "express";
import {
  getPatientById,
  getAllPatients,
  createPatient,
  updatePatient,
  deletePatient,
  findInactivePatientsSince,
  findPatientsWithUpcomingAppointments,
  findUpcomingAppointmentsByPatientId,
  findPatientsByName,
} from "../../Infrastructure/Controllers/PatientController";

export const patientRouter = express.Router();

patientRouter.get("/", getAllPatients);
patientRouter.get("/:id", getPatientById);
patientRouter.post("/", createPatient);
patientRouter.put("/", updatePatient);
patientRouter.delete("/:id", deletePatient);

patientRouter.get("/inactive/:date", findInactivePatientsSince);
patientRouter.get("/with-upcoming", findPatientsWithUpcomingAppointments);
patientRouter.get("/:id/upcoming", findUpcomingAppointmentsByPatientId);
patientRouter.get("/name/:name", findPatientsByName);
