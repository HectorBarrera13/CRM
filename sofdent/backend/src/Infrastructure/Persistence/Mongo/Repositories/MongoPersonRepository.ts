import { PersonRepository } from "../../../../Domain/Repository/PersonRepository";
import { Person } from "../../../../Domain/Entities/Person";
import { PersonModel } from "../Schemas/PersonSchema"; // Mongoose schema

export class MongoPersonRepository implements PersonRepository {
  async save(entity: Person): Promise<Person> {
    const doc = new PersonModel({
      idPerson: entity.idPerson,
      names: entity.names,
      lastNames: entity.lastNames,
      birthDate: entity.birthDate,
      address: entity.address,
      phone: entity.phone,
      email: entity.email,
    });
    const saved = await doc.save();
    return saved; // Return the generated idPerson
  }

  async update(entity: Person): Promise<Person> {
    await PersonModel.updateOne(
      { idPerson: entity.idPerson },
      {
        $set: {
          names: entity.names,
          lastNames: entity.lastNames,
          birthDate: entity.birthDate,
          address: entity.address,
          phone: entity.phone,
          email: entity.email,
        },
      }
    );
  }

  async delete(entity: Person): Promise<Person> {
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

  async findByName(name: string): Promise<Person[]> {
    const regex = new RegExp(name, "i"); // Case-insensitive search
    const docs = await PersonModel.find({
      $or: [{ names: regex }, { lastNames: regex }],
    });
    return docs.map((doc) => Person.createPerson(doc));
  }
}
