import { Appointment } from "../../../../Domain/Entities/Appointment";
import { AppointmentRepository } from "../../../../Domain/Repository/AppointmentRepository";
import { AppointmentModel } from "../Schemas/AppointmentSchema";

export class MongoAppointmentRepository implements AppointmentRepository {
  async save(appointment: Appointment): Promise<void> {
    await AppointmentModel.create(appointment);
  }

  async findById(id: string): Promise<Appointment | null> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Appointment[]> {
    const appointments = await AppointmentModel.find();
    return appointments.map((doc) => Appointment.createAppointment(doc));
  }

  async update(appointment: Appointment): Promise<void> {
    await AppointmentModel.updateOne(
      { idAppointment: appointment.idAppointment },
      {
        $set: {
          timeStart: appointment.timeStart,
          timeEnd: appointment.timeEnd,
        },
      }
    );
  }

  async delete(appointment: Appointment): Promise<void> {
    await AppointmentModel.deleteOne({
      idAppointment: appointment.idAppointment,
    });
  }

  async updateAppointmentTime(
    id: string,
    start: string,
    end: string
  ): Promise<void> {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const date = startDate.toISOString().split("T")[0]; // yyyy-mm-dd
    const timeStart = startDate.toTimeString().slice(0, 5); // HH:MM
    const timeEnd = endDate.toTimeString().slice(0, 5); // HH:MM

    await AppointmentModel.updateOne(
      { idAppointment: parseInt(id) },
      {
        $set: {
          date,
          timeStart,
          timeEnd,
        },
      }
    );
  }
}
