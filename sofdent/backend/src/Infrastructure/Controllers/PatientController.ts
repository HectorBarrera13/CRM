// src/Infrastructure/controllers/PatientController.ts

import { Request, Response } from "express";
import { MongoPatientRepository } from "../Persistence/Mongo/Repositories/MongoPatientRepository";
import { CreatePatient } from "../../Application/UseCases/Patient/CreatePatient";
import { GetPatientById } from "../../Application/UseCases/Patient/GetPatientById";
import { GetAllPatients } from "../../Application/UseCases/Patient/GetAllPatients";
import { UpdatePatient } from "../../Application/UseCases/Patient/UpdatePatient";
import { DeletePatient } from "../../Application/UseCases/Patient/DeletePatient";

// instanciar servicios (puedes mover esto a inyección de dependencias luego)
const repository = new MongoPatientRepository();

export const createPatient = async (req: Request, res: Response) => {
  const patient = req.body;
  const useCase = new CreatePatient(repository);
  await useCase.execute(patient);
  res.status(201).json({ message: "Paciente creado" });
};

export const getPatientById = async (req: Request, res: Response) => {
  const idPatient = req.params.id;
  const useCase = new GetPatientById(repository);
  const patient = await useCase.execute(idPatient);
  if (!patient) {
    return res.status(404).json({ message: "No encontrado" });
  }
  return res.json(patient);
};

export const getAllPatients = async (req: Request, res: Response) => {
  const useCase = new GetAllPatients(repository);
  const patients = await useCase.execute();
  if (!patients || patients.length === 0) {
    return res.status(404).json({ message: "No se encontraron pacientes" });
  }
  return res.json(patients);
};

export const updatePatient = async (req: Request, res: Response) => {
  const patient = req.body;
  const useCase = new UpdatePatient(repository);
  await useCase.execute(patient);
  res.status(200).json({ message: "Paciente actualizado" });
};

export const deletePatient = async (req: Request, res: Response) => {
  const idPatient = req.params.id;
  const useCase = new DeletePatient(repository);
  await useCase.execute(idPatient);
  res.status(200).json({ message: "Paciente eliminado" });
};

// Aquí puedes agregar más funciones según sea necesario
