import { ValidDate } from "../valueObjects/ValidDate";

export class Notes {
  private _idNote: number;
  private _date: ValidDate;
  private _state: string;
  private _title: string;
  private _description: string;

  constructor(
    date: ValidDate,
    state: string,
    title: string,
    description: string
  ) {
    this._idNote = 0;
    this._date = date;
    this._state = state;
    this._title = title;
    this._description = description;
  }

  get idNote(): number {
    return this._idNote;
  }
  set idNote(value: number) {
    this._idNote = value;
  }

  get date(): ValidDate {
    return this._date;
  }
  set date(value: ValidDate) {
    this._date = value;
  }

  get state(): string {
    return this._state;
  }
  set state(value: string) {
    this._state = value;
  }

  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
}
