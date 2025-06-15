import { PersonRepository } from "../../../Domain/Repository/PersonRepository";
import { Person } from "../../../Domain/Entities/Person";

export class GetPersonById {
  constructor(private readonly repository: PersonRepository) {}

  async execute(idPerson: string): Promise<Person | null> {
    // Aquí podrías agregar reglas de negocio, validaciones, etc.
    return await this.repository.findById(idPerson);
  }
}
