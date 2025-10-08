import { Appointment } from "./Appointment";
import { Treatment } from "./Treatment";

export class Procedure {
  private _appointment: Appointment;
  private _state: "Pending" | "Completed";
  private _treatments: Treatment[];

  constructor(
    appointment: Appointment,
    state: "Pending",
    treatments: Treatment[]
  ) {
    this._appointment = appointment;
    this._state = state;
    this._treatments = treatments;
  }

  //COREGIR
  addTreatments(treatments: Treatment[]) {
    this._treatments.concat(treatments);
  }
}
