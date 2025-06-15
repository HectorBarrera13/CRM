import { PersonRepository } from "../../../Domain/Repository/PersonRepository";
import { Person } from "../../../Domain/Entities/Person";

export class UpdatePerson {
  constructor(private readonly repository: PersonRepository) {}

  async execute(person: Person): Promise<void> {
    const id = person.idPerson?.toString();
    if (!id) {
      throw new Error("Person ID is required");
    }

    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new Error("Person not found");
    }

    // ✅ Si pasa validación, se actualiza
    await this.repository.update(person);
  }
}
