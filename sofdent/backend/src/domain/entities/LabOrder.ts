import { Patient } from "./Patient";

export class LabOrder {
  private _idLabOrder: number;
  private _patient: Patient;
  private _description: string;

  constructor(patient: Patient, description: string) {
    this._idLabOrder = 0;
    this._patient = patient;
    this._description = description;
  }

  get idLabOrder(): number {
    return this._idLabOrder;
  }
  set idLabOrder(value: number) {
    this._idLabOrder = value;
  }

  get patient(): Patient {
    return this._patient;
  }
  set patient(value: Patient) {
    this._patient = value;
  }

  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
}
