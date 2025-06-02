import expres from "express";
import {
  getDoctorById,
  getAllDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  findDoctorsBySpeciality,
  findUpcomingAppointmentsByDoctorId,
  findDoctorsWithUpcomingAppointments,
} from "../../Infrastructure/Controllers/DoctorController";

export const doctorRouter = expres.Router();

doctorRouter.get("/", getAllDoctors);
doctorRouter.get("/:id", getDoctorById);
doctorRouter.post("/", createDoctor);
doctorRouter.put("/", updateDoctor);
doctorRouter.delete("/:id", deleteDoctor);
doctorRouter.get("/specialty/:specialty", findDoctorsBySpeciality);
doctorRouter.get("/upcoming-appointments", findDoctorsWithUpcomingAppointments);
doctorRouter.get(
  "/upcoming-appointments/:id",
  findUpcomingAppointmentsByDoctorId
);
