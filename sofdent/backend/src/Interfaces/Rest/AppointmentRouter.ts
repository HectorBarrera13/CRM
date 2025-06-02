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
  updateAppointmentTime,
} from "../../Infrastructure/Controllers/AppointmentController";

export const appointmentRouter = express.Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", getAppointmentById);
appointmentRouter.post("/", createAppointment);
appointmentRouter.put("/:id", updateAppointment);
appointmentRouter.delete("/:id", deleteAppointment);
appointmentRouter.get("/patient/:patientId", findAppointmentsByPatientId);
appointmentRouter.get("/doctor/:doctorId", findAppointmentsByDoctorId);
appointmentRouter.get("/day/:day", findAppointmentsOfDay);
appointmentRouter.put("/updateTime/:id", updateAppointmentTime);
