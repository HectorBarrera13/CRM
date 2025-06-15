import { AppointmentRepository } from "../../../Domain/Repository/AppointmentRepository";
import { Appointment } from "../../../Domain/Entities/Appointment";

export class UpdateAppointment {
  constructor(private readonly repository: AppointmentRepository) {}

  async execute(appointment: Appointment): Promise<void> {
    const id = appointment.idAppointment?.toString();
    if (!id) {
      throw new Error("Appointment ID is required");
    }

    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new Error("Appointment not found");
    }

    // ✅ Si pasa validación, se actualiza
    await this.repository.update(appointment);
  }
}
