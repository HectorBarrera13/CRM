// src/infrastructure/persistence/MongoPatientRepository.ts
import { PatientRepository } from "../../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../../Domain/Entities/Patient";
import { PatientModel } from "../Schemas/PatientSchema";

export class MongoPatientRepository implements PatientRepository {
  async save(patient: Patient): Promise<Patient> {
    await PatientModel.create(patient);
    return patient;
  }

  async findById(id: string): Promise<Patient | null> {
    const doc = await PatientModel.findOne({ idPatient: id });
    if (!doc) return null;
    return Patient.createPatient(doc);
  }

  async findAll(): Promise<Patient[]> {
    const patients = await PatientModel.find();
    return patients.map((doc) => Patient.createPatient(doc));
  }

  async update(patient: Patient): Promise<Patient> {
    //CHECAR ESTO
    await PatientModel.updateOne({ idPatient: patient.idPatient }, patient);
    return patient;
  }

  async delete(patient: Patient): Promise<Patient> {
    //CHECAR ESTO
    await PatientModel.deleteOne({ idPatient: patient.idPatient });
    return patient;
  }
}

//return (await PatientModel.find()).map(doc => new Patient(
//doc.idPatient,
//doc.person, // o adaptarlo a tu clase `Person`
//doc.lastAppointment,
//doc.upcomingAppointments ?? []
//));
