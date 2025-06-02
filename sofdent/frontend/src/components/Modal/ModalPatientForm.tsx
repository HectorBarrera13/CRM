import { useState } from "react";

import Modal from "./Modal";

interface Props {
  show: boolean;
  onClose: () => void;
}

const PatientForm = ({ show, onClose }: Props) => {
  const [form, setForm] = useState({
    names: "",
    lastNames: "",
    phone: "",
    email: "",
    address: "",
    birthDate: "",
    lastAppointment: "",
    upcomingAppointments: "",
    debt: "",
  });

  const handleSubmit = async () => {
    if (!form.names.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }

    if (!form.phone.trim()) {
      alert("El teléfono es obligatorio.");
      return;
    }

    // if (!/^\d{2}\/\d{2}\/\d{4}$/.test(form.birthdate)) {
    //   alert("La fecha de nacimiento debe tener el formato DD/MM/AAAA.");
    //   return;
    // }

    // if (isNaN(form.debt) || form.debt < 0) {
    //   alert("La deuda debe ser un número válido.");
    //   return;
    // }

    const newPatient = {
      idPatient: "7",
      lastAppointment: form.lastAppointment,
      upcomingAppointments: form.upcomingAppointments
        ? form.upcomingAppointments.split(",").map((date) => date.trim())
        : [],
      debt: parseFloat(form.debt) || 0,
      person: {
        idPerson: "7",
        names: form.names,
        lastName: form.lastNames,
        birthDate: form.birthDate,
        address: form.address,
        phone: form.phone,
        email: form.email,
      },
    };

    try {
      const res = await fetch("http://localhost:3000/api/patient/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPatient),
      });

      if (!res.ok) throw new Error("Error al registrar el paciente");

      alert("Paciente registrado correctamente");
      onClose(); // cerrar el modal
    } catch (error) {
      console.error("Error al guardar:", error);
      console.log(newPatient);
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
          type="text"
          placeholder="Última cita (YYYY-MM-DD)"
          value={form.lastAppointment}
          onChange={(e) =>
            setForm({ ...form, lastAppointment: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Próximas citas (YYYY-MM-DD,YYYY-MM-DD)"
          value={form.upcomingAppointments}
          onChange={(e) =>
            setForm({ ...form, upcomingAppointments: e.target.value })
          }
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

export default PatientForm;
