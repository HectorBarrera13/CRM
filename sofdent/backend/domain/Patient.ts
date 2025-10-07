import { MedicalHistory } from "./MedicalHistory";
import { Person } from "./Person";

export class Patient {
  private idPatient: Number;

  constructor(private person: Person, private medicalHistory: MedicalHistory) {
    this.idPatient = 0;
  }
}
