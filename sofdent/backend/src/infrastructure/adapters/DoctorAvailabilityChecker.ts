import { IDoctorAvailabilityChecker } from "../../application/ports/IDoctorAvailabilityChecker";
import { ValidDate } from "../../domain/valueObjects/ValidDate";
import { ValidTime } from "../../domain/valueObjects/ValidTime";
import { IAppointmentRepository } from "../../domain/repositories/IAppointmentRepository";

export class DoctorAvailabilityChecker implements IDoctorAvailabilityChecker {
  constructor(private readonly appointmentRepo: IAppointmentRepository) {}

  async isAvailable(
    idDoctor: number,
    date: ValidDate,
    time: ValidTime,
    duration: number
  ): Promise<boolean> {
    return true;
  }
}
