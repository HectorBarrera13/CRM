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
    return this.repository.findAll();
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
}
