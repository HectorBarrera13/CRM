// src/Infrastructure/controllers/PatientController.ts

import { Request, Response } from "express";
import { PatientService } from "../../Application/Services/PatientService";
import { MongoPatientRepository } from "../Persistence/Mongo/MongoPatientRepository";

// instanciar servicios (puedes mover esto a inyección de dependencias luego)
const repository = new MongoPatientRepository();
const service = new PatientService(repository);

export const getPatientById = async (req: Request, res: Response) => {
  const patient = await service.getPatientById(req.params.id);
  if (!patient) res.status(404).json({ message: "No encontrado" });
  res.json(patient);
};

export const getAllPatients = async (req: Request, res: Response) => {
  const patients = await service.getAllPatients();
  res.json(patients);
};

export const createPatient = async (req: Request, res: Response) => {
  const patient = req.body;
  await service.createPatient(patient);
  res.status(201).json({ message: "Paciente creado" });
};

export const updatePatient = async (req: Request, res: Response) => {
  const patient = req.body;
  await service.updatePatient(patient);
  res.status(200).json({ message: "Paciente actualizado" });
};

export const deletePatient = async (req: Request, res: Response) => {
  const patient = await service.getPatientById(req.params.id);
  if (!patient) {
    res.status(404).json({ message: "No encontrado" });
    return;
  }
  await service.deletePatient(patient);
  res.status(200).json({ message: "Paciente eliminado" });
};

export const findInactivePatientsSince = async (
  req: Request,
  res: Response
) => {
  const date = req.params.date;
  const patients = await service.findInactivePatientsSince(date);
  res.json(patients);
};

export const findPatientsWithUpcomingAppointments = async (
  req: Request,
  res: Response
) => {
  const patients = await service.findPatientsWithUpcomingAppointments();
  res.json(patients);
};

export const findPatientsByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  const patients = await service.findPatientsByName(name);
  res.json(patients);
};

// Aquí puedes agregar más funciones según sea necesario
