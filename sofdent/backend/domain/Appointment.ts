import { Patient } from "./Patient";
import { Doctor } from "./Doctor";

export class Appointment {
  private readonly idAppointment: Number;

  constructor(
    private startHour: String,
    private endHour: String,
    private date: Date,
    private comment: String,
    private location: String,
    private motive: String,
    private state: String,
    private patient: Patient,
    private doctor: Doctor
  ) {
    this.idAppointment = 0;
  }
}
