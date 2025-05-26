import { Repository } from "./Repository";
import { Doctor } from "../Entities/Doctor"; // ruta ejemplo

export interface DoctorRepository extends Repository<Doctor> {
  // Aquí puedes agregar métodos específicos para Doctor si los necesitas
  findWithUpcomingAppointments(): Promise<Doctor[]>;
  findUpcomingAppointmentsByDoctorId(doctorId: string): Promise<Doctor[]>;
  findBySpeciality(speciality: string): Promise<Doctor[]>;
}
