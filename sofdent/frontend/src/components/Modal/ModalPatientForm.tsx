import { useEffect, useState } from "react";
import Modal from "./Modal";
import { createPatient } from "../../api/apiPatient";

interface Props {
  show: boolean;
  onClose: () => void;
}

const initialFormState = {
  names: "",
  lastNames: "",
  phone: "",
  email: "",
  address: "",
  birthDate: "",
  debt: "",
};

const ModalPatientForm = ({ show, onClose }: Props) => {
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    if (show) {
      setForm(initialFormState);
    }
  }, [show]);

  const handleSubmit = async () => {
    //Crear un nuevo paciente y una nueva persona
    const newPerson = {
      idPerson: "0",
      names: form.names,
      lastNames: form.lastNames,
      birthDate: form.birthDate,
      address: form.address,
      phone: form.phone,
      email: form.email,
    };
    const newPatient = {
      idPatient: "0", // se asignará después
      idPerson: "0", // se asignará después
      lastAppointmentId: null, // se asignará después
      debt: parseFloat(form.debt),
    };

    try {
      const { status: patientStatus, data: dataPerson } = await createPatient(
        newPerson,
        newPatient
      );
      if (patientStatus === 201 || patientStatus === 200) {
        alert("Paciente registrado correctamente.");
        onClose(); // Cerrar el modal después de guardar
      } else if (patientStatus === 409) {
        alert("⚠️ " + dataPerson.message); // mensaje de error como "Ya existe una persona..."
      } else {
        alert("⚠️ " + dataPerson.message); // mensaje de error como "Ya existe una persona..."
      }
    } catch (error) {
      console.error("Error al guardar:", error);

      alert("No se pudo registrar el paciente.");
    }
  };

  return (
    <Modal
      show={show}
      title="Registrar paciente"
      onClose={onClose}
      footer={
        <button className="btn btn-primary" onClick={handleSubmit}>
          Guardar paciente
        </button>
      }
    >
      <div>
        <h2>Registrar nuevo paciente</h2>
        <input
          type="text"
          placeholder="Nombres"
          value={form.names}
          onChange={(e) => setForm({ ...form, names: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apellidos"
          value={form.lastNames}
          onChange={(e) => setForm({ ...form, lastNames: e.target.value })}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Correo"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Dirección"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="Fecha de nacimiento (YYYY-MM-DD)"
          value={form.birthDate}
          onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
        />

        <input
          type="number"
          placeholder="Deuda"
          value={form.debt}
          onChange={(e) => setForm({ ...form, debt: e.target.value })}
        />
      </div>
    </Modal>
  );
};

export default ModalPatientForm;
