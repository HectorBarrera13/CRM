import { Person } from "./Person";

export class Doctor {
  constructor(
    public readonly idDoctor: number,
    public person: Person,
    public color: string
  ) {}
}
