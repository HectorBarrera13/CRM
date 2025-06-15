import { PersonRepository } from "../../../../Domain/Repository/PersonRepository";
import { Person } from "../../../../Domain/Entities/Person";
import { PersonModel } from "../Schemas/PersonSchema"; // Mongoose schema

export class MongoPersonRepository implements PersonRepository {
  async save(entity: Person): Promise<void> {
    const doc = new PersonModel({
      idPerson: entity.idPerson,
      names: entity.names,
      lastName: entity.lastNames,
      birthDate: entity.birthDate,
      address: entity.address,
      phone: entity.phone,
      email: entity.email,
    });
    await doc.save();
  }

  async update(entity: Person): Promise<void> {
    await PersonModel.updateOne(
      { idPerson: entity.idPerson },
      {
        $set: {
          names: entity.names,
          lastName: entity.lastNames,
          birthDate: entity.birthDate,
          address: entity.address,
          phone: entity.phone,
          email: entity.email,
        },
      }
    );
  }

  async delete(entity: Person): Promise<void> {
    await PersonModel.deleteOne({ idPerson: entity.idPerson });
  }

  async findById(id: string): Promise<Person | null> {
    const doc = await PersonModel.findOne({ idPerson: id });
    if (!doc) return null;
    return Person.createPerson(doc);
  }

  async findAll(): Promise<Person[]> {
    const docs = await PersonModel.find();
    return docs.map((doc) => Person.createPerson(doc));
  }
}
