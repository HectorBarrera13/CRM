import { Person } from "./Person";

export class Patient {
  constructor(
    public readonly idPatient?: number | null,
    public person?: Person | null,
    public lastAppointment?: string | null,
    public upcomingAppointments: string[] = []
  ) {}
}
