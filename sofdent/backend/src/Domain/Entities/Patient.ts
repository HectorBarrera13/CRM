export class Patient {
  constructor(
    public readonly idPatient?: number | null,
    public idPerson?: number | null,
    public lastAppointmentId?: number | null
  ) {}
}
