import Calendar from "./components/Calendar/Calendar";
import Button from "./components/Button";
import { useCalendarActions } from "./components/Calendar/useCalendarActions";
import { useState } from "react";
import ModalAppointmentForm from "./components/Modal/ModalAppointmentForm";
import ModalPatientForm from "./components/Modal/ModalPatientForm";
import type { Appointment } from "./models/Appointment";
import ModalDoctorForm from "./components/Modal/ModalDoctorForm";
import Card from "./components/Card/Card";

function App() {
  const { calendarRef, addAppointment } = useCalendarActions();
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  const [showModalPatient, setShowModalPatient] = useState(false);
  const [showModalDoctor, setShowModalDoctor] = useState(false);

  const handleGuardarAppointment = (appointment: Appointment) => {
    addAppointment(appointment);
    console.log("registrando cita");
    setShowModalAppointment(false);
  };

  return (
    <main style={{ padding: 24 }}>
      <header>
        <h1>Mi panel principal</h1>
      </header>
      <Button onClick={() => setShowModalAppointment(true)} isLoading={false}>
        Nuevo Appointment
      </Button>
      <Button onClick={() => setShowModalPatient(true)} isLoading={false}>
        Nuevo Paciente
      </Button>
      <Button onClick={() => setShowModalDoctor(true)} isLoading={false}>
        Nuevo Doctor
      </Button>
      <ModalAppointmentForm
        show={showModalAppointment}
        onClose={() => setShowModalAppointment(false)}
        onGuardar={handleGuardarAppointment}
      />
      <ModalPatientForm
        show={showModalPatient}
        onClose={() => setShowModalPatient(false)}
      />
      <ModalDoctorForm
        show={showModalDoctor}
        onClose={() => setShowModalDoctor(false)}
      />
      <Card className="mx-auto" size="grande">
        <h2 className="h5 mb-3">Calendario</h2>
        <Calendar calendarRef={calendarRef} />
      </Card>
    </main>
  );
}

export default App;
