import { Patient } from "./Patient.ts";
import { Treatment } from "./Treatment.ts";

type Status = "Pending" | "In Progress" | "Completed";

export class TreatmentPlan {
  private _idPlan: number;
  private _treatments: Treatment[];
  private _patient: Patient;
  private _status: Status = "Pending";

  constructor(treatments: Treatment[], patient: Patient, status?: Status) {
    this._idPlan = 0;
    this._treatments = treatments;
    this._patient = patient;
    if (status) this._status = status;
  }

  get idPlan(): number {
    return this._idPlan;
  }

  get treatments(): Treatment[] {
    return this._treatments;
  }
  set treatments(treatments: Treatment[]) {
    this._treatments = treatments;
  }

  get patient(): Patient {
    return this._patient;
  }
  set patient(value: Patient) {
    this._patient = value;
  }

  get status(): Status {
    return this._status;
  }
  set status(value: Status) {
    this._status = value;
  }

  estinatedTotalPrice(): number {
    return this._treatments.reduce(
      (total, treatment) => total + treatment.estimatedPrice,
      0
    );
  }

  estinatedTotalDuration(): number {
    return this._treatments.reduce(
      (total, treatment) => total + treatment.estimatedDuration,
      0
    );
  }

  addTreatment(treatment: Treatment): void {
    this._treatments.push(treatment);
  }

  removeTreatment(treatmentId: number): void {
    this._treatments = this._treatments.filter(
      (treatment) => treatment.idTreatment !== treatmentId
    );
  }
}
