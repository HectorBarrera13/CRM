import type { Person } from "./Person";

export interface Patient extends Person {
  idPatient: number | null;
  lastAppointment: String;
  upcomingAppointments: String;
  debt: number;
}
