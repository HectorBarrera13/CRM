import Calendar from "./components/Calendar/Calendar";
import Button from "./components/Button";
import { useCalendarActions } from "./components/Calendar/useCalendarActions";
import { useState } from "react";
import ModalAppointmentForm from "./components/Modal/ModalAppointmentForm";
import type { Appointment } from "./models/EventAppointment";
import Card from "./components/Card/Card";
import { PatientsList } from "./components/test";

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
      <div className="container mt-4">
        <Card className="mx-auto" style={{ height: 600, maxWidth: "1000px" }}>
          <h2 className="h5 mb-3">Calendario</h2>
          <div style={{ flex: 1, height: "100%", overflow: "hidden" }}>
            <Calendar calendarRef={calendarRef} />
          </div>
        </Card>
      </div>
    </main>
  );
}

export default App;
