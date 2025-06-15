import { DoctorRepository } from "../../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../../Domain/Entities/Doctor";

export class UpdateDoctor {
  constructor(private readonly repository: DoctorRepository) {}

  async execute(doctor: Doctor): Promise<void> {
    const id = doctor.idDoctor?.toString();
    if (!id) {
      throw new Error("Doctor ID is required");
    }

    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new Error("Doctor not found");
    }

    await this.repository.update(doctor);
  }
}
