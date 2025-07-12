import { Request, Response } from "express";
import { MongoPersonRepository } from "../Persistence/Mongo/Repositories/MongoPersonRepository";
import { CreatePerson } from "../../Application/UseCases/Person/CreatePerson";
import { GetPersonById } from "../../Application/UseCases/Person/GetPersonById";
import { GetAllPersons } from "../../Application/UseCases/Person/GetAllPersons";
import { UpdatePerson } from "../../Application/UseCases/Person/UpdatePerson";
import { DeletePerson } from "../../Application/UseCases/Person/DeletePerson";
import { FindByName } from "../../Application/UseCases/Person/FindByName";

const repository = new MongoPersonRepository();

export const createPerson = async (req: Request, res: Response) => {
  try {
    const person = req.body;
    const useCase = new CreatePerson(repository);
    const result = await useCase.execute(person);

    switch (result.status) {
      case "success":
        return res
          .status(201)
          .json({ message: "Persona creada ", idPerson: result.idPerson });
      case "duplicate":
        return res
          .status(409)
          .json({ message: result.message, idPerson: result.idPerson });
      case "error":
        return res.status(400).json({ message: result.message });
      default:
        return res.status(500).json({ message: "Error inesperado" });
    }
  } catch (error: any) {
    console.error("Error atrapado en controlador:", error.message);
    return res.status(400).json({ message: error.message }); // puedes usar 400 o 500 según el caso
  }
};

export const getPersonById = async (req: Request, res: Response) => {
  const idPerson = req.params.id;
  const useCase = new GetPersonById(repository);
  const person = await useCase.execute(idPerson);
  if (!person) {
    return res.status(404).json({ message: "No encontrado" });
  }
  res.json(person);
};

export const getAllPersons = async (req: Request, res: Response) => {
  const useCase = new GetAllPersons(repository);
  const persons = await useCase.execute();
  if (!persons || persons.length === 0) {
    return res.status(404).json({ message: "No se encontraron personas" });
  }
  res.json(persons);
};

export const updatePerson = async (req: Request, res: Response) => {
  const person = req.body;
  const useCase = new UpdatePerson(repository);
  await useCase.execute(person);
  res.status(200).json({ message: "Persona actualizada" });
};

export const deletePerson = async (req: Request, res: Response) => {
  const idPerson = req.params.id;
  const useCase = new DeletePerson(repository);
  await useCase.execute(idPerson);
  res.status(200).json({ message: "Persona eliminada" });
};

export const findByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  const useCase = new FindByName(repository);
  try {
    const persons = await useCase.execute(name);
    return res.json(persons);
  } catch (error) {
    return res
      .status(404)
      .json({ message: "No se encontraron personas con ese nombre" });
  }
};
