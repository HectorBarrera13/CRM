import { PatientRepository } from "../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../Domain/Entities/Patient";

export class CreatePatient {
  constructor(private readonly repository: PatientRepository) {}

  async execute(patient: Patient): Promise<void> {
    // Aquí podrías agregar reglas de negocio, validaciones, etc.
    await this.repository.save(patient);
  }
}
