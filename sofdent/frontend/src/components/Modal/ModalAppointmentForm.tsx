import { useState } from "react";
import Modal from "./Modal";
import type { Appointment } from "../../models/Appointment";
import { mapAppointmentToBackend } from "./mapAppointmentToBackend";
import { searchPatientByName } from "../../api/apiPatient";

interface Props {
  show: boolean;
  onClose: () => void;
  onGuardar: (data: Appointment) => void;
}

const ModalAppointmentForm = ({ show, onClose, onGuardar }: Props) => {
  const [form, setForm] = useState({
    patientNames: "",
    patientLastNames: "",
    doctorNames: "",
    doctorLastNames: "",
    day: "",
    startTime: "",
    endTime: "",
    title: "",
    description: "",
  });

  const [patientResults, setPatientResults] = useState<any[]>([]);
  const [doctorResults, setDoctorResults] = useState<any[]>([]);

  const handleSubmit = async () => {
    console.log(form);
    const timeZoneOffset = "-05:00";
    const startHour = `${form.day}T${form.startTime}:00${timeZoneOffset}`;
    const finishHour = `${form.day}T${form.endTime}:00${timeZoneOffset}`;

    const newAppointment: Appointment = {
      idAppointment: "",
      idPatient: "0",
      idDoctor: "0",
      title: form.patientNames,
      description: form.patientLastNames,
      startHour,
      finishHour,
    };

    const backendAppointment = mapAppointmentToBackend(newAppointment);
    console.log(backendAppointment);
    try {
      const res = await fetch("http://localhost:3000/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(backendAppointment),
      });

      if (!res.ok) throw new Error("Error al guardar la cita");

      const savedAppointment = await res.json();

      // Ahora puedes hacer algo con la cita guardada
      onGuardar(savedAppointment); // Opcional: actualizar estado global o cerrar modal
      onClose(); // Cierra el modal si quieres
    } catch (error) {
      console.error("Error:", error);
      console.log();
      alert("Hubo un problema al guardar la cita.");
    }
  };

  return (
    <Modal
      show={show}
      title="Registrar nueva cita"
      onClose={onClose}
      footer={
        <button className="btn btn-primary" onClick={handleSubmit}>
          Guardar cita
        </button>
      }
    >
      <input
        type="text"
        name="fake-patient-names"
        autoComplete="new-password"
        placeholder="Nombres del paciente"
        value={form.patientNames}
        onChange={async (e) => {
          const name = e.target.value;
          setForm({
            ...form,
            patientNames: name,
          });

          setPatientResults([]);
          console.log("Buscando paciente por nombre:", name);
          if (name.length >= 2) {
            const { status, data } = await searchPatientByName(name);
            setPatientResults(data);
            if (status !== 200) {
              console.error("Error al buscar paciente:", data);
              setPatientResults([]);
            }
          }
          return;
        }}
      />
      <input
        type="text"
        name="fake-patient-lastNames"
        autoComplete="new-password"
        placeholder="Apellidos del paciente"
        value={form.patientLastNames}
        onChange={async (e) => {
          const lastNames = e.target.value;
          setForm({
            ...form,
            patientLastNames: lastNames,
          });

          setPatientResults([]);

          if (lastNames.length >= 2) {
            const { status, data } = await searchPatientByName(lastNames);
            setPatientResults(data);
            if (status !== 200) {
              console.error("Error al buscar paciente:", data);
              setPatientResults([]);
            }
          }
          return;
        }}
      />
      <ul className="autocomplete-list-patient">
        {patientResults.map((person) => (
          <li
            key={person.idPatient}
            onClick={() => {
              setForm({
                ...form,
                patientNames: person.names,
                patientLastNames: person.lastNames,
              });
              setPatientResults([]);
            }}
          >
            {person.names + " " + person.lastNames}
          </li>
        ))}
      </ul>
      <input
        type="text"
        name="fake-doctor-name"
        autoComplete="new-password"
        placeholder="Nombre del doctor"
        value={form.doctorNames}
        onChange={async (e) => {
          const name = e.target.value;
          setForm({ ...form, doctorNames: name });

          if (name.length < 2) {
            setDoctorResults([]);
            return;
          }

          const res = await fetch(
            `http://localhost:3000/api/doctor/name/${name}`
          );
          const results = await res.json();
          setDoctorResults(results);
        }}
      />
      <ul className="autocomplete-list-doctor">
        {doctorResults.map((doctor) => (
          <li
            key={doctor.idDoctor}
            onClick={() => {
              setForm({
                ...form,
                doctorNames: doctor.person.names,
                doctorLastNames: doctor.person.lastName,
              });
              setDoctorResults([]);
            }}
          >
            {doctor.person.names + " " + doctor.person.lastName}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Día de la cita (YYYY-MM-DD)"
        value={form.day}
        onChange={(e) => setForm({ ...form, day: e.target.value })}
      />
      <input
        type="text"
        placeholder="Hora inicio (HH:MM)"
        value={form.startTime}
        onChange={(e) => setForm({ ...form, startTime: e.target.value })}
      />
      <input
        type="text"
        placeholder="Hora fin (HH:MM)"
        value={form.endTime}
        onChange={(e) => setForm({ ...form, endTime: e.target.value })}
      />
    </Modal>
  );
};

export default ModalAppointmentForm;
