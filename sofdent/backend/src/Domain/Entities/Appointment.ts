import { Patient } from "./Patient";
import { Doctor } from "./Doctor";

export class Appointment {
  constructor(
    public day: string,
    public hour: string,
    public patient: Patient,
    public doctor: Doctor
  ) {}
}
