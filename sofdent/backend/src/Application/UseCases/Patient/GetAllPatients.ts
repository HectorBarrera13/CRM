import { PatientRepository } from "../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../Domain/Entities/Patient";

export class GetAllPatients {
  constructor(private readonly repository: PatientRepository) {}

  async execute(): Promise<Patient[]> {
    const patients = await this.repository.findAll();
    if (!patients || patients.length === 0) {
      throw new Error("No patients found");
    }
    return patients;
  }
}
