import { Person } from "./Person";

export class Patient {
  constructor(
    public readonly idPatient: number,
    public person: Person,
    public lastAppointment: string,
    public upcomingAppointments: string[] = []
  ) {}
}
