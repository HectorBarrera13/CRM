import { ClinicRepository } from "../../../../Domain/Repository/ClinicRepository";
import { Clinic } from "../../../../Domain/Entities/Clinic";
import { clinicModel } from "../Schemas/ClinicSchema";

export class MongoClinicRepository implements ClinicRepository {
  save(entity: Clinic): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(entity: Clinic): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(entity: Clinic): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<Clinic | null> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Clinic[]> {
    throw new Error("Method not implemented.");
  }
}
