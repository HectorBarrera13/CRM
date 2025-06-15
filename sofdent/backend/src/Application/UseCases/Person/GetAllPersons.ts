import { PersonRepository } from "../../../Domain/Repository/PersonRepository";
import { Person } from "../../../Domain/Entities/Person";

export class GetAllPersons {
  constructor(private readonly repository: PersonRepository) {}

  async execute(): Promise<Person[]> {
    const Persons = await this.repository.findAll();
    if (!Persons || Persons.length === 0) {
      throw new Error("No Persons found");
    }
    return Persons;
  }
}
