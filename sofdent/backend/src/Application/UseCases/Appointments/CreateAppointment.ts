import { AppointmentRepository } from "../../../Domain/Repository/AppointmentRepository";
import { Appointment } from "../../../Domain/Entities/Appointment";

export class CreateAppointment {
  constructor(private readonly repository: AppointmentRepository) {}

  async execute(appointment: Appointment): Promise<void> {
    // Aquí podrías agregar reglas de negocio, validaciones, etc.
    await this.repository.save(appointment);
  }
}
