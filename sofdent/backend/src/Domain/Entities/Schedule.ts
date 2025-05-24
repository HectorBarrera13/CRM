// src/domain/entities/Schedule.ts
import { Appointment } from "./Appointment";

export class Schedule {
  constructor(
    public day: string, // puede ser solo un marcador ("semana del 20-26 May")
    public weekAppointments: Appointment[] = []
  ) {}

  // Devuelve las citas de un día específico (ej: "2025-05-22")
  getAppointmentsOfDay(day: string): Appointment[] {
    return this.weekAppointments.filter((app) => app.day === day);
  }

  // (Opcional) Agrupa todas las citas por día
  getAppointmentsGroupedByDay(): Record<string, Appointment[]> {
    return this.weekAppointments.reduce((acc, app) => {
      acc[app.day] = acc[app.day] || [];
      acc[app.day].push(app);
      return acc;
    }, {} as Record<string, Appointment[]>);
  }
}
