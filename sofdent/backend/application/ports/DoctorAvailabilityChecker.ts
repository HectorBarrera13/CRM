import { Doctor } from "../../domain/Doctor";

export class DoctorAvailabilityChecker {
  static isAvailable(doctor: Doctor, date: Date): boolean {
    return true;
  }
}
