import { DoctorRepository } from "../../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../../Domain/Entities/Doctor";

export class CreateDoctor {
  constructor(private readonly repository: DoctorRepository) {}

  async execute(doctor: Doctor): Promise<void> {
    // Verificar si el doctor ya existe
    await this.repository.save(doctor);
  }
}
