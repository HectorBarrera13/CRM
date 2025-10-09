import { Treatment } from "./Treatment";
import { Patient } from "./Patient";

export class Revision {
  private _date: Date;
  private _treatment: Treatment;
  private _patient: Patient;
  constructor(date: Date, treatment: Treatment, patient: Patient) {
    this._date = date;
    this._treatment = treatment;
    this._patient = patient;
  }
}
