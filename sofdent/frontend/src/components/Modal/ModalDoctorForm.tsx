import { useEffect, useState } from "react";
import Modal from "./Modal";
import { createDoctor } from "../../api/apiDoctor";

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
  speciality: "",
  color: "",
  debt: "",
};

const ModalDoctorForm = ({ show, onClose }: Props) => {
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    if (show) {
      setForm(initialFormState);
    }
  }, [show]);

  const handleSubmit = async () => {
    const newPerson = {
      idPerson: "0",
      names: form.names,
      lastNames: form.lastNames,
      birthDate: form.birthDate,
      address: form.address,
      phone: form.phone,
      email: form.email,
    };
    const newDoctor = {
      idDoctor: "0", // se asignará después
      idPerson: "0", // se asignará después
      color: form.color,
      speciality: form.speciality,
      debt: parseFloat(form.debt),
    };

    try {
      const { status: doctorStatus, data: doctorData } = await createDoctor(
        newPerson,
        newDoctor
      );

      if (doctorStatus === 201) {
        alert("Doctor registrado correctamente.");
        onClose(); // Cerrar el modal después de guardar
      }
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("No se pudo registrar el Doctor.");
    }
  };

  return (
    <Modal
      show={show}
      title="Registrar Doctor"
      onClose={onClose}
      footer={
        <button className="btn btn-primary" onClick={handleSubmit}>
          Guardar Doctor
        </button>
      }
    >
      <div>
        <h2>Registrar nuevo doctor</h2>
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
        <input
          type="text"
          placeholder="Especialidad"
          value={form.speciality}
          onChange={(e) => setForm({ ...form, speciality: e.target.value })}
        />
        <input
          type="color"
          value={form.color}
          onChange={(e) => setForm({ ...form, color: e.target.value })}
        />
      </div>
    </Modal>
  );
};

export default ModalDoctorForm;
