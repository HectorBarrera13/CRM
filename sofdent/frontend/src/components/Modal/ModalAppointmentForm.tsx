import { useState } from "react";
import Modal from "./Modal";
import type { Appointment } from "../../models/Appointment";

interface Props {
  show: boolean;
  onClose: () => void;
  onGuardar: (data: Appointment) => void;
}

const ModalAppointmentForm = ({ show, onClose, onGuardar }: Props) => {
  const [form, setForm] = useState({
    patientName: "",
    idPatient: "",
    day: "",
    startTime: "",
    endTime: "",
  });

  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSubmit = () => {
    const timeZoneOffset = "-05:00";
    const startHour = `${form.day}T${form.startTime}:00${timeZoneOffset}`;
    const finishHour = `${form.day}T${form.endTime}:00${timeZoneOffset}`;

    const newAppointment: Appointment = {
      idAppointment: form.day,
      idPatient: form.idPatient,
      startHour,
      finishHour,
    };

    onGuardar(newAppointment); // Aquí pasas el dato hacia App.tsx
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
      <form>
        <input
          type="text"
          placeholder="Nombre del paciente"
          value={form.patientName}
          onChange={async (e) => {
            const name = e.target.value;
            setForm({ ...form, patientName: name, idPatient: "" });

            if (name.length < 2) return;

            const res = await fetch(
              `http://localhost:3000/api/patient/name/${name}`
            );
            const results = await res.json();
            setSearchResults(results);
          }}
        />
        <ul className="autocomplete-list">
          {searchResults.map((patient) => (
            <li
              key={patient.idPatient}
              onClick={() => {
                setForm({
                  ...form,
                  patientName: patient.name,
                  idPatient: patient.idPatient,
                });
                setSearchResults([]);
              }}
            >
              {patient.name}
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
      </form>
    </Modal>
  );
};

export default ModalAppointmentForm;
