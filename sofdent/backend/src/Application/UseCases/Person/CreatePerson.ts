import { PersonRepository } from "../../../Domain/Repository/PersonRepository";
import { Person } from "../../../Domain/Entities/Person";

type CreatePersonResult =
  | { status: "success"; message: string; idPerson: number | null }
  | { status: "duplicate"; message: string; idPerson: number | null }
  | { status: "error"; message: string; idPerson?: null };

export class CreatePerson {
  constructor(private readonly repository: PersonRepository) {}

  async execute(person: Person): Promise<CreatePersonResult> {
    if (!person.names || person.names.trim() === "") {
      return { status: "error", message: "Se requiere un nombre válido" };
    }
    if (!person.lastNames || person.lastNames.trim() === "") {
      return { status: "error", message: "Se requiere un apellido válido" };
    }
    if (!person.email || person.email.trim() === "") {
      return {
        status: "error",
        message: "Se requiere un correo electrónico válido",
      };
    }
    if (!person.phone || person.phone.trim() === "") {
      return {
        status: "error",
        message: "Se requiere un número de teléfono válido",
      };
    }
    if (!person.birthDate) {
      return {
        status: "error",
        message: "Se requiere una fecha de nacimiento válida",
      };
    }

    const existingPerson = await this.repository.findByName(person.names);

    if (existingPerson && existingPerson.length > 0) {
      for (const existing of existingPerson) {
        if (
          existing.names === person.names &&
          existing.lastNames === person.lastNames &&
          existing.email === person.email
        ) {
          return {
            status: "duplicate",
            message: "Ya existe una persona con ese nombre",
            idPerson: existing.idPerson ?? null,
          };
        }
      }
    }

    const savedPerson = await this.repository.save(person);
    console.log("Persona guardada:", savedPerson);

    return {
      status: "success",
      message: "Persona creada correctamente",
      idPerson: savedPerson.idPerson ?? null,
    };
  }
}
