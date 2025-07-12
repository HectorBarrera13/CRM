import { Request, Response } from "express";
import { MongoDoctorRepository } from "../Persistence/Mongo/Repositories/MongoDoctorRepository";
import { CreateDoctor } from "../../Application/UseCases/Doctor/CreateDoctor";
import { GetDoctorById } from "../../Application/UseCases/Doctor/GetDoctorById";
import { GetAllDoctors } from "../../Application/UseCases/Doctor/GetAllDoctors";
import { UpdateDoctor } from "../../Application/UseCases/Doctor/UpdateDoctor";
import { DeleteDoctor } from "../../Application/UseCases/Doctor/DeleteDocor";

const repository = new MongoDoctorRepository();

export const createDoctor = async (req: Request, res: Response) => {
  const doctor = req.body;
  const useCase = new CreateDoctor(repository);
  await useCase.execute(doctor);
  res.status(201).json({ message: "Doctor creado" });
};

export const getDoctorById = async (req: Request, res: Response) => {
  const doctorId = req.params.id;
  const useCase = new GetDoctorById(repository);
  const doctor = await useCase.execute(doctorId);
  if (!doctor) {
    return res.status(404).json({ message: "No encontrado" });
  }
  return res.json(doctor);
};

export const getAllDoctors = async (req: Request, res: Response) => {
  const useCase = new GetAllDoctors(repository);
  const doctors = await useCase.execute();
  if (!doctors || doctors.length === 0) {
    return res.status(404).json({ message: "No se encontraron doctores" });
  }
  return res.json(doctors);
};

export const updateDoctor = async (req: Request, res: Response) => {
  const doctor = req.body;
  const useCase = new UpdateDoctor(repository);
  await useCase.execute(doctor);
  return res.status(200).json({ message: "Doctor actualizado" });
};

export const deleteDoctor = async (req: Request, res: Response) => {
  const doctorId = req.params.id;
  const useCase = new DeleteDoctor(repository);
  await useCase.execute(doctorId);
  res.status(200).json({ message: "Doctor eliminado" });
};
