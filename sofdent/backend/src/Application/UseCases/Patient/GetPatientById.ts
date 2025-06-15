import { PatientRepository } from "../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../Domain/Entities/Patient";

export class GetPatientById {
  constructor(private readonly repository: PatientRepository) {}

  async execute(idPatient: string): Promise<Patient | null> {
    // Aquí podrías agregar reglas de negocio, validaciones, etc.
    return await this.repository.findById(idPatient);
  }
}
