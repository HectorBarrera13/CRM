import { useState } from "react";
import Modal from "./Modal";
import type { Appointment } from "../../models/Appointment";
import { mapAppointmentToBackend } from "./mapAppointmentToBackend";

interface Props {
  show: boolean;
  onClose: () => void;
  onGuardar: (data: Appointment) => void;
}

const ModalAppointmentForm = ({ show, onClose, onGuardar }: Props) => {
  const [form, setForm] = useState({
    patientName: "",
    patientLastName: "",
    idPatient: "",
    doctorName: "",
    doctorLastName: "",
    idDoctor: "",
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
      idPatient: form.idPatient,
      idDoctor: form.idDoctor,
      title: form.patientName,
      description: form.patientLastName,
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
        name="fake-patient-name"
        autoComplete="new-password"
        placeholder="Nombre del paciente"
        value={form.patientName}
        onChange={async (e) => {
          const name = e.target.value;
          const lastName = e.target.value;
          setForm({
            ...form,
            patientName: name,
            idPatient: "",
            patientLastName: lastName,
          });

          if (name.length < 2) {
            setPatientResults([]);
            return;
          }

          const res = await fetch(
            `http://localhost:3000/api/patient/name/${name}`
          );
          const results = await res.json();
          setPatientResults(results);
        }}
      />
      <ul className="autocomplete-list-patient">
        {patientResults.map((patient) => (
          <li
            key={patient.idPatient}
            onClick={() => {
              setForm({
                ...form,
                patientName: patient.person.names,
                patientLastName: patient.person.lastName,
                idPatient: patient.idPatient,
              });
              setPatientResults([]);
            }}
          >
            {patient.person.names + " " + patient.person.lastName}
          </li>
        ))}
      </ul>
      <input
        type="text"
        name="fake-doctor-name"
        autoComplete="new-password"
        placeholder="Nombre del doctor"
        value={form.doctorName}
        onChange={async (e) => {
          const name = e.target.value;
          setForm({ ...form, doctorName: name, idDoctor: "" });

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
                doctorName: doctor.person.names,
                doctorLastName: doctor.person.lastName,
                idDoctor: doctor.idDoctor,
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
