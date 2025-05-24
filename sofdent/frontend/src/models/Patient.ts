import type { Person } from "./Person";

export interface Patient extends Person {
  idPatient: string | null;
  lastAppointment: string;
}
