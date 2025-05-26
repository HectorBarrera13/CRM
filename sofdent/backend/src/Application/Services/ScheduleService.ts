// src/application/services/AppointmentService.ts

import { Appointment } from "../../Domain/Entities/Appointment";

export class AppointmentService {
  // Devuelve citas entre dos fechas (inclusive)
  static getAppointmentsInRange(
    appointments: Appointment[],
    from: Date,
    to: Date
  ): Appointment[] {
    return appointments.filter((app) => {
      const appDate = new Date(app.date);
      return appDate >= from && appDate <= to;
    });
  }

  // Genera un rango de fechas según vista
  static getDateRangeForView(
    view: "day" | "week" | "month" | "year",
    reference: Date
  ): [Date, Date] {
    const start = new Date(reference);
    const end = new Date(reference);

    switch (view) {
      case "day":
        break;
      case "week":
        start.setDate(reference.getDate() - reference.getDay());
        end.setDate(start.getDate() + 6);
        break;
      case "month":
        start.setDate(1);
        end.setMonth(reference.getMonth() + 1);
        end.setDate(0); // último día del mes
        break;
      case "year":
        start.setMonth(0, 1); // 1 de enero
        end.setMonth(11, 31); // 31 de diciembre
        break;
    }

    return [start, end];
  }

  // Función final para preparar eventos
  static getAppointmentsForView(
    appointments: Appointment[],
    view: "day" | "week" | "month" | "year",
    reference: Date
  ): Appointment[] {
    const [start, end] = this.getDateRangeForView(view, reference);
    return this.getAppointmentsInRange(appointments, start, end);
  }
}
