import { PersonRepository } from "../../../Domain/Repository/PersonRepository";
import { Person } from "../../../Domain/Entities/Person";

export class DeletePerson {
  constructor(private readonly repository: PersonRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error("Person ID is required");
    }

    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new Error("Person not found");
    }

    // ✅ Si pasa validación, se elimina
    await this.repository.delete(existing);
  }
}
