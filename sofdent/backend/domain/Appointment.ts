import { Patient } from "./Patient";
import { Doctor } from "./Doctor";
import { Procedure } from "./Procedure";
import { ConsultingRoom } from "./ConsultingRoom";
import { Treatment } from "./Treatment";
import { DoctorAvailabilityChecker } from "../application/ports/DoctorAvailabilityChecker";

type AppointmentState =
  | "Scheduled"
  | "Confirmed"
  | "Completed"
  | "Canceled"
  | "NoShow";

export class Appointment {
  private _idAppointment: number = 0;
  private _startHour!: string; // HH:MM (24h)
  private _durationHours!: number; // horas > 0
  private _date!: Date;
  private _comment?: string;
  private _location!: string;
  private _motive?: string;
  private _patient!: Patient;
  private _doctor!: Doctor;
  private _procedure!: Procedure;
  private _room!: ConsultingRoom;
  private _state: AppointmentState = "Scheduled";

  constructor(
    startHour: string,
    durationHours: number,
    appointmentDate: Date,
    location: string,
    patient: Patient,
    doctor: Doctor,
    procedure: Procedure,
    room: ConsultingRoom
  ) {
    this.startHour = startHour;
    this.durationHours = durationHours;
    this.date = appointmentDate;
    this.location = location;
    this.patient = patient;
    this.doctor = doctor;
    this.procedure = procedure;
    this.room = room;
  }

  get idAppointment(): number {
    return this._idAppointment;
  }

  get startHour(): string {
    return this._startHour;
  }
  set startHour(newHour: string) {
    const re = /^(?:[01]\d|2[0-3]):[0-5]\d$/; // HH:MM 24h
    if (!re.test(newHour)) throw new Error(`Hora inválida (HH:MM): ${newHour}`);
    this._startHour = newHour;
  }

  get durationHours(): number {
    return this._durationHours;
  }
  set durationHours(value: number) {
    if (value <= 0) throw new Error("La duración debe ser > 0 horas");
    if (value > 8) throw new Error("Duración máxima: 8 horas");
    this._durationHours = value;
  }

  get date(): Date {
    return this._date;
  }
  set date(d: Date) {
    if (Number.isNaN(d.getTime())) throw new Error("Fecha inválida");
    this._date = d;
  }

  get comment(): string | undefined {
    return this._comment;
  }
  set comment(v: string | undefined) {
    if (v && v.length > 200) throw new Error("Comentario > 200 chars");
    this._comment = v;
  }

  get location(): string {
    return this._location;
  }
  set location(v: string) {
    if (!v.trim()) throw new Error("Location requerida");
    this._location = v.trim();
  }

  get motive(): string | undefined {
    return this._motive;
  }
  set motive(v: string | undefined) {
    this._motive = v?.trim();
  }

  get patient(): Patient {
    return this._patient;
  }
  set patient(p: Patient) {
    this._patient = p;
  }

  get doctor(): Doctor {
    return this._doctor;
  }
  set doctor(d: Doctor) {
    this._doctor = d;
  }

  get procedure(): Procedure {
    return this._procedure;
  }
  set procedure(p: Procedure) {
    this._procedure = p;
  }

  get room(): ConsultingRoom {
    return this._room;
  }
  set room(r: ConsultingRoom) {
    this._room = r;
  }

  get state(): AppointmentState {
    return this._state;
  }
  set state(newState: AppointmentState) {
    // Reglas simples de máquina de estados
    if (this._state === "Completed" && newState !== "Completed") {
      throw new Error("Una cita completada no puede cambiar de estado");
    }
    if (this._state === "Canceled" && newState !== "Canceled") {
      throw new Error("Una cita cancelada no puede reactivarse");
    }
    this._state = newState;
  }

  // --- métodos de dominio útiles ---

  reSchedule(newStartHour: string, newDurationHours: number): void {
    if (this._state === "Completed" || this._state === "Canceled") {
      throw new Error("No se puede reprogramar una cita no activa");
    }
    this.startHour = newStartHour;
    this.durationHours = newDurationHours;
    this.state = "Scheduled";
  }

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

  // Chequeo de traslape, las horas se pasan a milisegundos(unidad usada por ts)
  overlapsWith(otherAppointment: Appointment): boolean {
    const appointmentStart = this.combineDateHour(this._date, this._startHour);
    const appointmentEnd = new Date(
      appointmentStart.getTime() + this._durationHours * 3600_000
    );

    const otherAppointmentStart = otherAppointment.combineDateHour(
      otherAppointment._date,
      otherAppointment._startHour
    );
    const otherAppointmentEnd = new Date(
      otherAppointmentStart.getTime() +
        otherAppointment._durationHours * 3600_000
    );

    let isOverlappingOver: boolean = appointmentStart < otherAppointmentEnd;
    let isOverlappingUnder: boolean = otherAppointmentStart < appointmentEnd;
    return isOverlappingOver && isOverlappingUnder;
  }

  private combineDateHour(date: Date, hhmm: string): Date {
    const [hh, mm] = hhmm.split(":").map(Number);
    const fullDate = new Date(date);
    fullDate.setHours(hh, mm, 0, 0);
    return fullDate;
  }

  changeDoctor(newDoctor: Doctor) {
    let fullDate: Date = this.combineDateHour(this._date, this.startHour);
    if (DoctorAvailabilityChecker.isAvailable(newDoctor, fullDate)) {
      //checker deberia ir aqui o en Doctor????
      this._doctor = newDoctor;
    }
  }

  addProcedure(treatments: Treatment[]): void {
    this._procedure.addTreatments(treatments);
  }
}
