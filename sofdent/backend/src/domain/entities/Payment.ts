import { Appointment } from "./Appointment";
import { ValidDate } from "../valueObjects/ValidDate";

type PaymentMethod = "Cash" | "Card";

export class Payment {
  private _idPayment: number;
  private _date: ValidDate;
  private _amount: number;
  private _paymentMethod: PaymentMethod;
  private _appointment: Appointment;

  constructor(
    date: ValidDate,
    amount: number,
    paymentMethod: PaymentMethod,
    appointment: Appointment
  ) {
    this._idPayment = 0;
    this._date = date;
    this._amount = amount;
    this._paymentMethod = paymentMethod;
    this._appointment = appointment;
  }

  get idPayment(): number {
    return this._idPayment;
  }
  set idPayment(value: number) {
    this._idPayment = value;
  }

  get date(): ValidDate {
    return this._date;
  }
  set date(value: ValidDate) {
    this._date = value;
  }

  get amount(): number {
    return this._amount;
  }
  set amount(value: number) {
    this._amount = value;
  }

  get paymentMethod(): PaymentMethod {
    return this._paymentMethod;
  }
  set paymentMethod(value: PaymentMethod) {
    this._paymentMethod = value;
  }

  get appointment(): Appointment {
    return this._appointment;
  }
  set appointment(value: Appointment) {
    this._appointment = value;
  }
}
