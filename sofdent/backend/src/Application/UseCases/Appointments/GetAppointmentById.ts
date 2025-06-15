import { AppointmentRepository } from "../../../Domain/Repository/AppointmentRepository";
import { Appointment } from "../../../Domain/Entities/Appointment";

export class GetAppointmentById {
  constructor(private readonly repository: AppointmentRepository) {}

  async execute(idAppointment: string): Promise<Appointment | null> {
    // Aquí podrías agregar reglas de negocio, validaciones, etc.
    return await this.repository.findById(idAppointment);
  }
}
