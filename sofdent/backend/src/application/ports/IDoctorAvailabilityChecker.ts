import { ValidDate } from "../../domain/valueObjects/ValidDate";
import { ValidTime } from "../../domain/valueObjects/ValidTime";

export interface IDoctorAvailabilityChecker {
  isAvailable(
    idDoctor: number,
    date: ValidDate,
    time: ValidTime,
    duration: number
  ): Promise<boolean>;
}
