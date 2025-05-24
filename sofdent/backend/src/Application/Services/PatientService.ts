// src/Application/Services/PatientService.ts

import { PatientRepository } from "../../Domain/Repository/PatientRepository";
import { Patient } from "../../Domain/Entities/Patient";

export class PatientService {
  constructor(private readonly repository: PatientRepository) {}

  async createPatient(patient: Patient): Promise<void> {
    await this.repository.save(patient);
  }

  async getPatientById(id: string): Promise<Patient | null> {
    return this.repository.findById(id);
  }

  async getAllPatients(): Promise<Patient[]> {
    return this.repository.findAll();
  }

  async updatePatient(patient: Patient): Promise<void> {
    await this.repository.update(patient);
  }

  async deletePatient(patient: Patient): Promise<void> {
    await this.repository.delete(patient);
  }

  async findInactivePatientsSince(date: string): Promise<Patient[]> {
    return this.repository.findInactiveSince(date);
  }

  async findPatientsWithUpcomingAppointments(): Promise<Patient[]> {
    return this.repository.findWithUpcomingAppointments();
  }

  async findUpcomingAppointmentsByPatientId(
    patientId: string
  ): Promise<Patient[]> {
    return this.repository.findUpcomingAppointmentsByPatientId(patientId);
  }

  async findPatientsByName(name: string): Promise<Patient[]> {
    return this.repository.findByName(name);
  }
}
