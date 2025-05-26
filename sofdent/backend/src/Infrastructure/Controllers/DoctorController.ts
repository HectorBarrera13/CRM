import { Request, Response } from "express";
import { DoctorService } from "../../Application/Services/DoctorService";
import { MongoDoctorRepository } from "../Persistence/Mongo/MongoDoctorRepository";

const repository = new MongoDoctorRepository();
const service = new DoctorService(repository);

export const getDoctorById = async (req: Request, res: Response) => {
  const doctor = await service.getDoctorById(req.params.id);
  if (!doctor) res.status(404).json({ message: "No encontrado" });
  res.json(doctor);
};

export const getAllDoctors = async (req: Request, res: Response) => {
  const doctors = await service.getAllDoctors();
  res.json(doctors);
};

export const createDoctor = async (req: Request, res: Response) => {
  const doctor = req.body;
  await service.createDoctor(doctor);
  res.status(201).json({ message: "Doctor creado" });
};

export const updateDoctor = async (req: Request, res: Response) => {
  const doctor = req.body;
  await service.updateDoctor(doctor);
  res.status(200).json({ message: "Doctor actualizado" });
};

export const deleteDoctor = async (req: Request, res: Response) => {
  const doctor = await service.getDoctorById(req.params.id);
  if (!doctor) {
    res.status(404).json({ message: "No encontrado" });
    return;
  }
  await service.deleteDoctor(doctor);
  res.status(200).json({ message: "Doctor eliminado" });
};

export const findDoctorsWithUpcomingAppointments = async (
  req: Request,
  res: Response
) => {
  const doctors = await service.findWithUpcomingAppointments();
  res.json(doctors);
};

export const findUpcomingAppointmentsByDoctorId = async (
  req: Request,
  res: Response
) => {
  const doctorId = req.params.id;
  const doctors = await service.findUpcomingAppointmentsByDoctorId(doctorId);
  res.json(doctors);
};

export const findDoctorsBySpeciality = async (req: Request, res: Response) => {
  const speciality = req.params.speciality;
  const doctors = await service.findBySpeciality(speciality);
  res.json(doctors);
};
