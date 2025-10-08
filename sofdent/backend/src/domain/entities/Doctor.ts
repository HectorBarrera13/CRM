import { ValidDate } from "../valueObjects/ValidDate";
import { ValidTime } from "../valueObjects/ValidTime";

export class Doctor {
  private _idDoctor: number;
  private _speciality: string;
  private _color: string;

  constructor(private speciality: string, private color: string) {
    this._idDoctor = 0;
    this._speciality = speciality;
    this._color = color;
  }

  get idDoctor(): number {
    return this._idDoctor;
  }
}
