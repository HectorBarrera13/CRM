export class Patient {
  constructor(
    public readonly idPatient?: number | null,
    public idPerson?: number | null,
    public lastAppointmentId?: number | null,
    public debt?: number | null
  ) {}

  static createPatient(obj: any): Patient {
    return new Patient(
      obj.idPatient,
      obj.idPerson,
      obj.lastAppointmentId,
      obj.debt
    );
  }
}
