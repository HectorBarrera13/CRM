import { useState } from "react";
import AddNewAppointmentForm from "../formPages/AddNewAppointmentForm";

interface AppointmentData {
  patientId: string;
  patientName: string;
  appointmentDate: string;
  appointmentTime: string;
  duration: string;
  appointmentType: string;
  dentist: string;
  notes: string;
  status: string;
}

function CalendarPage() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewAppointment = () => {
    setShowAppointmentForm(true);
  };

  const handleCancelAppointment = () => {
    setShowAppointmentForm(false);
  };

  const handleSubmitAppointment = async (appointmentData: AppointmentData) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("New appointment created:", appointmentData);
      setIsSubmitting(false);
      setShowAppointmentForm(false);
      // Here you would typically show a success message
      alert("Appointment scheduled successfully!");
    }, 1500);
  };

  // If showing the appointment form, render it instead of the calendar
  if (showAppointmentForm) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              Schedule New Appointment
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Create a new appointment for a patient
            </p>
          </div>
          <button
            onClick={handleCancelAppointment}
            className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Back to Calendar
          </button>
        </div>

        <AddNewAppointmentForm
          onSubmit={handleSubmitAppointment}
          onCancel={handleCancelAppointment}
          isLoading={isSubmitting}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
            Calendar
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage appointments and schedule
          </p>
        </div>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          onClick={handleNewAppointment}
        >
          New Appointment
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <div className="grid grid-cols-7 gap-4 mb-6">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-slate-600 dark:text-slate-400"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-4">
          {Array.from({ length: 28 }, (_, i) => (
            <div
              key={i}
              className="aspect-square border border-slate-200 dark:border-slate-600 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {i + 1}
              </div>
              {i % 7 === 0 && (
                <div className="mt-1">
                  <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded px-1 py-0.5">
                    9:00 AM
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
