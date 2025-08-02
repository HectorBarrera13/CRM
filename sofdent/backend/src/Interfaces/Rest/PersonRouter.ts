import express from "express";
import {
  getPersonById,
  getAllPersons,
  createPerson,
  updatePerson,
  deletePerson,
} from "../../Infrastructure/Controllers/PersonController";

export const personRouter = express.Router();
personRouter.get("/", getAllPersons);
personRouter.get("/:id", getPersonById);
personRouter.post("/", createPerson);
personRouter.put("/", updatePerson);
personRouter.delete("/:id", deletePerson);
