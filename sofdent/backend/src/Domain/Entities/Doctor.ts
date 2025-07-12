import { Person } from "./Person";

export class Doctor {
  constructor(
    public readonly idDoctor?: number | null,
    public idPerson?: number | null,
    public speciality?: String | null,
    public color?: String | null,
    public debt?: number | null
  ) {}

  static createDoctor(obj: any): Doctor {
    return new Doctor(obj.idDoctor, obj.idPerson, obj.speciality, obj.color);
  }
}
