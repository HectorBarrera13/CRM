import { DoctorRepository } from "../../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../../Domain/Entities/Doctor";

export class DeleteDoctor {
  constructor(private readonly repository: DoctorRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error("Doctor ID is required");
    }

    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new Error("Doctor not found");
    }

    // ✅ Si pasa validación, se elimina
    await this.repository.delete(existing);
  }
}
