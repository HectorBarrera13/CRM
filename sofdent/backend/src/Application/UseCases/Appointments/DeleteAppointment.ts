import { AppointmentRepository } from "../../../Domain/Repository/AppointmentRepository";
import { Appointment } from "../../../Domain/Entities/Appointment";

export class DeleteAppointment {
  constructor(private readonly repository: AppointmentRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error("Appointment ID is required");
    }

    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new Error("Appointment not found");
    }

    // ✅ Si pasa validación, se elimina
    await this.repository.delete(existing);
  }
}
