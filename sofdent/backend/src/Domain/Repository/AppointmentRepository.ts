import { Repository } from "./Repository"; // ruta según tu estructura
import { Appointment } from "../Entities/Appointment"; // ruta ejemplo

export interface AppointmentRepository extends Repository<Appointment> {
  //Aquí puedes agregar métodos específicos para Schedule si los necesitas
  findAppointmentsOfDay(day: string): Promise<Appointment[]>;
  findAppointmentsByPatientId(patientId: string): Promise<Appointment[]>;
  findAppointmentsByDoctorId(doctorId: string): Promise<Appointment[]>;
}
