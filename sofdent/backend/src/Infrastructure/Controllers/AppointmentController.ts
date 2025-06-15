import { Request, Response } from "express";
import { MongoAppointmentRepository } from "../Persistence/Mongo/Repositories/MongoAppointmentRepository";
import { CreateAppointment } from "../../Application/UseCases/Appointments/CreateAppointment";
import { GetAppointmentById } from "../../Application/UseCases/Appointments/GetAppointmentById";
import { UpdateAppointment } from "../../Application/UseCases/Appointments/UpdateAppointment";
import { GetAllAppointments } from "../../Application/UseCases/Appointments/GetAllAppointments";
import { DeleteAppointment } from "../../Application/UseCases/Appointments/DeleteAppointment";

const repository = new MongoAppointmentRepository();

export const createAppointment = async (req: Request, res: Response) => {
  const appointment = req.body;
  const useCase = new CreateAppointment(repository);
  await useCase.execute(appointment);
  res.status(201).json({ message: "Appointment created" });
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const idAppointment = req.params.id;
  const useCase = new GetAppointmentById(repository);
  const appointment = await useCase.execute(idAppointment);
  if (!appointment) {
    return res.status(404).json({ message: "No encontrado" });
  }
  res.json(appointment);
};

export const getAllAppointments = async (req: Request, res: Response) => {
  const useCase = new GetAllAppointments(repository);
  const appointments = await useCase.execute();
  if (!appointments || appointments.length === 0) {
    return res.status(404).json({ message: "No appointments found" });
  }
  res.json(appointments);
};

export const updateAppointment = async (req: Request, res: Response) => {
  const appointment = req.body;
  const useCase = new UpdateAppointment(repository);
  await useCase.execute(appointment);
  res.status(200).json({ message: "Appointment updated" });
};

export const deleteAppointment = async (req: Request, res: Response) => {
  const idAppointment = req.params.id;
  const useCase = new DeleteAppointment(repository);
  await useCase.execute(idAppointment);
  res.status(200).json({ message: "Appointment deleted" });
};
