import { MedicalHistory } from "./MedicalHistory";
import { Person } from "./Person";

export class Patient {
  private _idPatient: number;
  private _person: Person;
  private _medicalHistory: MedicalHistory;

  constructor(person: Person, medicalHistory: MedicalHistory) {
    this._idPatient = 0;
    this._person = person;
    this._medicalHistory = medicalHistory;
  }

  get idPatient(): number {
    return this._idPatient;
  }
  set idPatient(value: number) {
    this._idPatient = value;
  }

  get person(): Person {
    return this._person;
  }
  set person(value: Person) {
    this._person = value;
  }

  get medicalHistory(): MedicalHistory {
    return this._medicalHistory;
  }
  set medicalHistory(value: MedicalHistory) {
    this._medicalHistory = value;
  }
}
