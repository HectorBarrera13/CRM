import express from "express";
import {
  getAppointmentById,
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  findAppointmentsByPatientId,
  findAppointmentsByDoctorId,
  findAppointmentsOfDay,
} from "../../Infrastructure/Controllers/AppointmentController";

export const appointmentRouter = express.Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", getAppointmentById);
appointmentRouter.post("/", createAppointment);
appointmentRouter.put("/", updateAppointment);
appointmentRouter.delete("/:id", deleteAppointment);
appointmentRouter.get("/patient/:patientId", findAppointmentsByPatientId);
appointmentRouter.get("/doctor/:doctorId", findAppointmentsByDoctorId);
appointmentRouter.get("/day/:day", findAppointmentsOfDay);
