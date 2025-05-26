import { Person } from "./Person";

export class Doctor {
  constructor(
    public readonly idDoctor?: number | null,
    public person?: Person | null,
    public speciality?: string | null,
    public color?: string | null
  ) {}
}
