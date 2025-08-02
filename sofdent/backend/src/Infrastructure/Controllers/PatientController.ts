// src/Infrastructure/controllers/PatientController.ts

import { Request, Response } from "express";
import { MongoPatientRepository } from "../Persistence/Mongo/Repositories/MongoPatientRepository";
import { MongoPersonRepository } from "../Persistence/Mongo/Repositories/MongoPersonRepository";
import { CreatePatient } from "../../Application/UseCases/Patient/CreatePatient";
import { GetPatientById } from "../../Application/UseCases/Patient/GetPatientById";
import { GetAllPatients } from "../../Application/UseCases/Patient/GetAllPatients";
import { UpdatePatient } from "../../Application/UseCases/Patient/UpdatePatient";
import { DeletePatient } from "../../Application/UseCases/Patient/DeletePatient";
import { CreatePerson } from "../../Application/UseCases/Person/CreatePerson";
import { FindPatientByName } from "../../Application/UseCases/Patient/FindPatientByName";

// instanciar servicios (puedes mover esto a inyección de dependencias luego)
const patientRepository = new MongoPatientRepository();
const personRepository = new MongoPersonRepository();

export const createPatient = async (req: Request, res: Response) => {
  const patient = req.body.patient;
  const person = req.body.person;
  const useCase = new CreatePatient(
    patientRepository,
    new CreatePerson(personRepository)
  );
  await useCase.execute(person, patient);
  res.status(201).json({ message: "Paciente creado" });
};

export const getPatientById = async (req: Request, res: Response) => {
  const idPatient = req.params.id;
  const useCase = new GetPatientById(patientRepository);
  const patient = await useCase.execute(idPatient);
  if (!patient) {
    return res.status(404).json({ message: "No encontrado" });
  }
  return res.json(patient);
};

export const getAllPatients = async (req: Request, res: Response) => {
  const useCase = new GetAllPatients(patientRepository);
  const patients = await useCase.execute();
  if (!patients || patients.length === 0) {
    return res.status(404).json({ message: "No se encontraron pacientes" });
  }
  return res.json(patients);
};

export const updatePatient = async (req: Request, res: Response) => {
  const patient = req.body;
  const useCase = new UpdatePatient(patientRepository);
  await useCase.execute(patient);
  res.status(200).json({ message: "Paciente actualizado" });
};

export const deletePatient = async (req: Request, res: Response) => {
  const idPatient = req.params.id;
  const useCase = new DeletePatient(patientRepository);
  await useCase.execute(idPatient);
  res.status(200).json({ message: "Paciente eliminado" });
};

export const findPatietnByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  const useCase = new FindPatientByName(repository);
  try {
    const persons = await useCase.execute(name);
    return res.json(persons);
  } catch (error) {
    return res
      .status(404)
      .json({ message: "No se encontraron personas con ese nombre" });
  }
};

// Aquí puedes agregar más funciones según sea necesario
