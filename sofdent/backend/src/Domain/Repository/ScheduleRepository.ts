import { Repository } from "./Repository"; // ruta según tu estructura
import { Schedule } from "../Entities/Schedule"; // ruta ejemplo
import { Appointment } from "../Entities/Appointment"; // ruta ejemplo
export interface ScheduleRepository extends Repository<Schedule> {
  //Aquí puedes agregar métodos específicos para Schedule si los necesitas
  getAppointmentsOfDay(day: string): Appointment[];
  getAppointmentsGroupedByDay(): Record<string, Appointment[]>;
  findUpcomingAppointmentsByScheduleId(ScheduleId: string): Promise<Schedule[]>;
}
