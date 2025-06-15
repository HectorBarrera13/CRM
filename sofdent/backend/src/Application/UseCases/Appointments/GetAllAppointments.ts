import { AppointmentRepository } from "../../../Domain/Repository/AppointmentRepository";
import { Appointment } from "../../../Domain/Entities/Appointment";

export class GetAllAppointments {
  constructor(private readonly repository: AppointmentRepository) {}

  async execute(): Promise<Appointment[]> {
    const appointments = await this.repository.findAll();
    if (!appointments || appointments.length === 0) {
      throw new Error("No appointments found");
    }
    return appointments;
  }
}
