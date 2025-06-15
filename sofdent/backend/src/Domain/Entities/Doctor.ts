import { Person } from "./Person";

export class Doctor {
  constructor(
    public readonly idDoctor?: number | null,
    public idPatient?: number | null,
    public speciality?: String | null,
    public color?: String | null
  ) {}
}
