import { PatientRepository } from "../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../Domain/Entities/Patient";

export class DeletePatient {
  constructor(private readonly repository: PatientRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error("Patient ID is required");
    }

    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new Error("Patient not found");
    }

    // ✅ Si pasa validación, se elimina
    await this.repository.delete(existing);
  }
}
