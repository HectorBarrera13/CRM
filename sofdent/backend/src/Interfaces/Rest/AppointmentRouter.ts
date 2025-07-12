import express from "express";
import {
  getAppointmentById,
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "../../Infrastructure/Controllers/AppointmentController";

export const appointmentRouter = express.Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", getAppointmentById);
appointmentRouter.post("/", createAppointment);
appointmentRouter.put("/:id", updateAppointment);
appointmentRouter.delete("/:id", deleteAppointment);
