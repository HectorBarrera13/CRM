import { PatientRepository } from "../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../Domain/Entities/Patient";

export class UpdatePatient {
  constructor(private readonly repository: PatientRepository) {}

  async execute(patient: Patient): Promise<void> {
    const id = patient.idPatient?.toString();
    if (!id) {
      throw new Error("Patient ID is required");
    }

    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new Error("Patient not found");
    }
    // ✅ Si pasa validación, se actualiza
    await this.repository.update(patient);
  }
}
