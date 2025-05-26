import Calendar from "./components/Calendar/Calendar";
import Button from "./components/Button";
import { useCalendarActions } from "./components/Calendar/useCalendarActions";
import { useState } from "react";
import ModalAppointmentForm from "./components/Modal/ModalAppointmentForm";
import type { Appointment } from "./models/EventAppointment";
import Card from "./components/Card/Card";

function App() {
  const { calendarRef, addAppointment } = useCalendarActions();
  const [showModal, setShowModal] = useState(false);

  const appointment: Appointment = {
    idAppointment: "mydraggable",
    startHour: "2025-05-12T14:30:00-05:00",
    finishHour: "2025-05-12T15:30:00-05:00",
    idPatient: "123456",
  };
  const handleGuardar = (appointment: Appointment) => {
    addAppointment(appointment);
    console.log("registrando cita");
    setShowModal(false);
  };

  return (
    <main style={{ padding: 24 }}>
      <header>
        <h1>Mi panel principal</h1>
      </header>
      <Button onClick={() => setShowModal(true)} isLoading={false}>
        Abrir modal
      </Button>
      <Button onClick={() => handleGuardar(appointment)} isLoading={false}>
        meter evento
      </Button>
      <ModalAppointmentForm
        show={showModal}
        onClose={() => setShowModal(false)}
        onGuardar={handleGuardar}
      />
      <Card className="mx-auto" size="grande">
        <h2 className="h5 mb-3">Calendario</h2>
        <Calendar calendarRef={calendarRef} />
      </Card>
    </main>
  );
}

export default App;
