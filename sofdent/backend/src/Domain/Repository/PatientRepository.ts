import { Repository } from "./Repository"; // ruta según tu estructura
import { Patient } from "../Entities/Patient"; // ruta ejemplo
import { Appointment } from "../Entities/Appointment";

export interface PatientRepository extends Repository<Patient> {
  // Aquí puedes agregar métodos específicos para Patient si los necesitas
  findInactiveSince(date: String): Promise<Patient[]>;
  findWithUpcomingAppointments(): Promise<Patient[]>;
  findByName(name: string): Promise<Patient[]>;
}
