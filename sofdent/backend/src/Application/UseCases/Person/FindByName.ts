import { PersonRepository } from "../../../Domain/Repository/PersonRepository";
import { Person } from "../../../Domain/Entities/Person";

export class FindByName {
  constructor(private readonly repository: PersonRepository) {}

  async execute(name: string): Promise<Person[]> {
    if (!name || name.trim() === "") {
      throw new Error("Name cannot be empty");
    }

    const Persons = await this.repository.findByName(name);
    if (!Persons || Persons.length === 0) {
      return [];
    }

    return Persons;
  }
}
