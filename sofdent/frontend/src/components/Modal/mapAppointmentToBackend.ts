import type { Appointment } from "../../models/Appointment";

export function mapAppointmentToBackend(appointment: Appointment) {
  const {
    idAppointment,
    title,
    description,
    startHour,
    finishHour,
    idPatient,
    idDoctor,
  } = appointment;

  const [date, timeStartWithZone] = startHour.split("T");
  const timeStart = timeStartWithZone.split("-")[0];

  const [, timeEndWithZone] = finishHour.split("T");
  const timeEnd = timeEndWithZone.split("-")[0];

  return {
    idAppointment: null,
    title,
    description,
    date,
    timeStart,
    timeEnd,
    patient: { idPatient },
    doctor: { idDoctor },
  };
}
