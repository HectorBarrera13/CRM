import { ValidDate } from "../valueObjects/ValidDate";
import { ValidTime } from "../valueObjects/ValidTime";
import { Person } from "./Person";

export class Doctor {
  private _idDoctor: number;
  private _speciality: string;
  private _color: string;
  private _person: Person;

  constructor(speciality: string, color: string, person: Person) {
    this._idDoctor = 0;
    this._speciality = speciality;
    this._color = color;
    this._person = person;
  }

  get idDoctor(): number {
    return this._idDoctor;
  }
  set idDoctor(value: number) {
    this._idDoctor = value;
  }

  get speciality(): string {
    return this._speciality;
  }
  set speciality(value: string) {
    this._speciality = value;
  }

  get color(): string {
    return this._color;
  }
  set color(value: string) {
    this._color = value;
  }

  get person(): Person {
    return this._person;
  }
}
