import type { Person } from "./Person";

export interface Doctor extends Person {
  idDoctor: String;
  speciality: String;
  color: String;
  person: Person;
}
