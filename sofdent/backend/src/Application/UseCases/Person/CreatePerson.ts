import { PersonRepository } from "../../../Domain/Repository/PersonRepository";
import { Person } from "../../../Domain/Entities/Person";

export class CreatePerson {
  constructor(private readonly repository: PersonRepository) {}

  async execute(person: Person): Promise<void> {
    // Aquí podrías agregar reglas de negocio, validaciones, etc.
    await this.repository.save(person);
  }
}
