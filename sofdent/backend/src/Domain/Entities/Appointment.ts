import { Patient } from "./Patient";
import { Doctor } from "./Doctor";

export class Appointment {
  constructor(
    public idAppointment?: number | null,
    public title?: string | null, //"Appointment with Dr. Smith",
    public date?: string | null, //"2020-01-01",
    public timeStart?: string | null, //"10:00:00",
    public timeEnd?: string | null,
    public description?: string | null,
    public patient?: Patient | null,
    public doctor?: Doctor | null
  ) {}
}
