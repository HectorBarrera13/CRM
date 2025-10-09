import { Patient } from "./Patient";
import { Doctor } from "./Doctor";
import { Procedure } from "./Procedure";
import { ConsultingRoom } from "./ConsultingRoom";
import { Treatment } from "./Treatment";
import { ValidTime } from "../valueObjects/ValidTime";
import { ValidDate } from "../valueObjects/ValidDate";

type AppointmentState =
  | "Scheduled"
  | "Confirmed"
  | "Completed"
  | "Canceled"
  | "NoShow";

export class Appointment {
  private _idAppointment: number = 0;
  private _startHour!: ValidTime; // HH:MM (24h)
  private _durationHours!: number; // horas > 0
  private _date!: ValidDate;
  private _comment?: string;
  private _location!: string;
  private _motive?: string;
  private _patient!: Patient;
  private _doctor!: Doctor;
  private _procedure!: Procedure;
  private _room!: ConsultingRoom;
  private _state: AppointmentState = "Scheduled";

  constructor(
    startHour: ValidTime,
    durationHours: number,
    appointmentDate: ValidDate,
    location: string,
    patient: Patient,
    doctor: Doctor,
    procedure: Procedure,
    room: ConsultingRoom
  ) {
    this._startHour = startHour;
    this._durationHours = durationHours;
    this._date = appointmentDate;
    this._location = location;
    this._patient = patient;
    this._doctor = doctor;
    this._procedure = procedure;
    this._room = room;
  }

  //Setters y Getters
  get idAppointment(): number {
    return this._idAppointment;
  }

  get startHour(): ValidTime {
    return this._startHour;
  }
  private set startHour(newHour: ValidTime) {
    this._startHour = newHour;
  }

  get durationHours(): number {
    return this._durationHours;
  }
  private set durationHours(value: number) {
    if (value <= 0) throw new Error("La duración debe ser > 0 horas");
    this._durationHours = value;
  }

  get date(): ValidDate {
    return this._date;
  }
  private set date(date: ValidDate) {
    this._date = date;
  }

  get comment(): string | undefined {
    return this._comment;
  }
  private set comment(comment: string | undefined) {
    if (comment && comment.length > 200)
      throw new Error("Comentario > 200 chars");
    this._comment = comment;
  }

  get location(): string {
    return this._location;
  }
  private set location(location: string) {
    if (!location.trim()) throw new Error("Location requerida");
    this._location = location.trim();
  }

  get motive(): string | undefined {
    return this._motive;
  }
  private set motive(motive: string | undefined) {
    this._motive = motive?.trim();
  }

  //Patient has no setter becouse an appointment cannot change from one patient to another
  get patient(): Patient {
    return this._patient;
  }

  get doctor(): Doctor {
    return this._doctor;
  }
  private set doctor(doctor: Doctor) {
    this._doctor = doctor;
  }

  get procedure(): Procedure {
    return this._procedure;
  }
  private set procedure(procedure: Procedure) {
    this._procedure = procedure;
  }

  get room(): ConsultingRoom {
    return this._room;
  }
  private set room(room: ConsultingRoom) {
    this._room = room;
  }

  get state(): AppointmentState {
    return this._state;
  }
  private set state(newState: AppointmentState) {
    this._state = newState;
  }

  //Public class methods

  confirm(): void {
    if (this._state !== "Scheduled")
      throw new Error("Solo 'Scheduled' puede confirmarse");
    this.state = "Confirmed";
  }
  complete(): void {
    if (this._state !== "Confirmed")
      throw new Error("Solo 'Confirmed' puede completarse");
    this.state = "Completed";
  }
  cancel(): void {
    if (this._state === "Completed")
      throw new Error("No se puede cancelar una cita completada");
    this.state = "Canceled";
  }
  noShow(): void {
    if (this._state === "Completed" || this._state === "Canceled")
      throw new Error("No se puede marcar esta cita");
    this._state = "NoShow";
  }

  reSchedule(
    newDate: ValidDate,
    newStartHour: ValidTime,
    newDurationHours: number
  ): void {
    if (this._state === "Completed" || this._state === "Canceled") {
      throw new Error("No se puede reprogramar una cita no activa");
    }
    this._date = newDate;
    this._startHour = newStartHour;
    this._durationHours = newDurationHours;
    this._state = "Scheduled";
  }

  addProcedure(treatments: Treatment[]): void {
    this._procedure.addTreatments(treatments);
  }
}
