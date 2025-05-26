import { Request, Response } from "express";
import { AppointmentService } from "../../Application/Services/AppointmentService";
import { MongoAppointmentRepository } from "../Persistence/Mongo/MongoAppointmentRepository";

const repository = new MongoAppointmentRepository();
const service = new AppointmentService(repository);

export const getAppointmentById = async (req: Request, res: Response) => {
  const appointment = await service.getAppointmentById(req.params.id);
  if (!appointment) {
    res.status(404).json({ message: "Appointment not found" });
    return;
  }
  res.json(appointment);
};

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments = await service.getAllAppointments();
  res.json(appointments);
};

export const createAppointment = async (req: Request, res: Response) => {
  const appointment = req.body;
  await service.createAppointment(appointment);
  res.status(201).json({ message: "Appointment created" });
};

export const updateAppointment = async (req: Request, res: Response) => {
  const appointment = req.body;
  await service.updateAppointment(appointment);
  res.status(200).json({ message: "Appointment updated" });
};

export const deleteAppointment = async (req: Request, res: Response) => {
  const appointment = await service.getAppointmentById(req.params.id);
  if (!appointment) {
    res.status(404).json({ message: "Appointment not found" });
    return;
  }
  await service.deleteAppointment(appointment);
  res.status(200).json({ message: "Appointment deleted" });
};

export const findAppointmentsByPatientId = async (
  req: Request,
  res: Response
) => {
  const patientId = req.params.patientId;
  const appointments = await service.findAppointmentsByPatientId(patientId);
  res.json(appointments);
};

export const findAppointmentsByDoctorId = async (
  req: Request,
  res: Response
) => {
  const doctorId = req.params.doctorId;
  const appointments = await service.findAppointmentsByDoctorId(doctorId);
  res.json(appointments);
};

export const findAppointmentsOfDay = async (req: Request, res: Response) => {
  const day = req.params.day;
  const appointments = await service.findAppointmentsOfDay(day);
  res.json(appointments);
};
