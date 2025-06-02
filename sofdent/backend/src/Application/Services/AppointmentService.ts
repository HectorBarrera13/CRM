import { Appointment } from "../../Domain/Entities/Appointment";
import { AppointmentRepository } from "../../Domain/Repository/AppointmentRepository";

export class AppointmentService {
  constructor(private readonly repository: AppointmentRepository) {}

  async createAppointment(appointment: Appointment): Promise<void> {
    await this.repository.save(appointment);
  }

  async getAppointmentById(id: string): Promise<Appointment | null> {
    return this.repository.findById(id);
  }

  async getAllAppointments(): Promise<Appointment[]> {
    const appointments = await this.repository.findAll();
    return appointments.map((appointment) => {
      const start = `${appointment.date}T${appointment.timeStart}:00`;
      const end = `${appointment.date}T${appointment.timeEnd}:00`;
      return {
        id: appointment.idAppointment,
        title: appointment.title,
        start,
        end,
      };
    });
  }

  async updateAppointment(appointment: Appointment): Promise<void> {
    await this.repository.update(appointment);
  }

  async deleteAppointment(appointment: Appointment): Promise<void> {
    await this.repository.delete(appointment);
  }

  async findAppointmentsOfDay(day: string): Promise<Appointment[]> {
    return this.repository.findAppointmentsOfDay(day);
  }

  async findAppointmentsByPatientId(patientId: string): Promise<Appointment[]> {
    return this.repository.findAppointmentsByPatientId(patientId);
  }

  async findAppointmentsByDoctorId(doctorId: string): Promise<Appointment[]> {
    return this.repository.findAppointmentsByDoctorId(doctorId);
  }

  async updateAppointmentTime(
    id: string,
    start: string,
    end: string
  ): Promise<void> {
    await this.repository.updateAppointmentTime(id, start, end);
  }
}
