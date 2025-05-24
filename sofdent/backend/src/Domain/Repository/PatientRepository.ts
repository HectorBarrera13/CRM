import { Repository } from "./Repository"; // ruta según tu estructura
import { Patient } from "../Entities/Patient"; // ruta ejemplo

export interface PatientRepository extends Repository<Patient> {
  // Aquí puedes agregar métodos específicos para Patient si los necesitas
  findInactiveSince(date: String): Promise<Patient[]>;
  findWithUpcomingAppointments(): Promise<Patient[]>;
  findUpcomingAppointmentsByPatientId(patientId: string): Promise<Patient[]>;
  findByName(name: string): Promise<Patient[]>;
}
