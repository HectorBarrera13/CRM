// src/infrastructure/persistence/MongoPatientRepository.ts
import { PatientRepository } from "../../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../../Domain/Entities/Patient";
import { PatientModel } from "../Schemas/PatientSchema";

export class MongoPatientRepository implements PatientRepository {
  async save(patient: Patient): Promise<void> {
    await PatientModel.create(patient);
  }

  async findById(id: string): Promise<Patient | null> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Patient[]> {
    throw new Error("Method not implemented.");
  }

  async update(patient: Patient): Promise<void> {
    await PatientModel.updateOne({ idPatient: patient.idPatient }, patient);
  }

  async delete(patient: Patient): Promise<void> {
    await PatientModel.deleteOne({ idPatient: patient.idPatient });
  }
}

//return (await PatientModel.find()).map(doc => new Patient(
//doc.idPatient,
//doc.person, // o adaptarlo a tu clase `Person`
//doc.lastAppointment,
//doc.upcomingAppointments ?? []
//));
