import { Patient } from "./Patient";
import { Doctor } from "./Doctor";

export class Appointment {
  constructor(
    public idAppointment?: number | null,
    public date?: string | null,
    public hourStart?: string | null,
    public hourEnd?: string | null,
    public description?: string | null,
    public patient?: Patient | null,
    public doctor?: Doctor | null
  ) {}
}
