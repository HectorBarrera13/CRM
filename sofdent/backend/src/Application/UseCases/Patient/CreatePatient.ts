import { PatientRepository } from "../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../Domain/Entities/Patient";

export class CreatePatient {
  constructor(private readonly patientRepository: PatientRepository) {}

  async execute(patient: Patient): Promise<void> {
    // Aquí podrías agregar reglas de negocio, validaciones, etc.
    console.log("Creando paciente:", patient);
    await this.patientRepository.save(patient);
  }
}
