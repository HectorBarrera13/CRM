import { PatientRepository } from "../../../Domain/Repository/PatientRepository";
import { FindByName } from "../Person/FindByName";

export class FindPatientByName {
  constructor(private readonly repository: PatientRepository) {}
  async execute(name: string) {
    const findByName = FindByName;
    if (!name || name.trim() === "") {
      throw new Error("Name cannot be empty");
    }

    const patients = await findByName.execute(name);
    console.log("Patients found:", patients);
    if (!patients || patients.length === 0) {
      return [];
    }

    return patients;
  }
}
