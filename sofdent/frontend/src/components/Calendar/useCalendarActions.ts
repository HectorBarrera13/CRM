import { useRef } from "react";
import type { Appointment } from "../../models/Appointment";
import FullCalendar from "@fullcalendar/react";

export const useCalendarActions = () => {
  const calendarRef = useRef<FullCalendar | null>(null);

  const addAppointment = (appointment: Appointment) => {
    const api = calendarRef.current?.getApi();
    api?.addEvent({
      id: appointment.idAppointment.toString(),
      title: appointment.idPatient.toString(),
      start: new Date(appointment.startHour).toISOString(),
      end: new Date(appointment.finishHour).toISOString(),
      display: "block",
      backgroundColor: "blue",
    });
  };

  return {
    calendarRef,
    addAppointment,
  };
};
