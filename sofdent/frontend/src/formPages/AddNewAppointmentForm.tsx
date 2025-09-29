import { useState } from "react";

interface AddNewAppointmentFormProps {
  onSubmit: (appointmentData: AppointmentData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

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

function AddNewAppointmentForm({
  onSubmit,
  onCancel,
  isLoading = false,
}: AddNewAppointmentFormProps) {
  const [formData, setFormData] = useState<AppointmentData>({
    patientId: "",
    patientName: "",
    appointmentDate: "",
    appointmentTime: "",
    duration: "30",
    appointmentType: "",
    dentist: "",
    notes: "",
    status: "scheduled",
  });

  const [errors, setErrors] = useState<Partial<AppointmentData>>({});

  // Mock patient data - in real app, this would come from API
  const mockPatients = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Mike Johnson" },
    { id: "4", name: "Sarah Wilson" },
    { id: "5", name: "David Brown" },
  ];

  const mockDentists = [
    "Dr. Sarah Martinez",
    "Dr. Michael Chen",
    "Dr. Emily Rodriguez",
    "Dr. James Thompson",
  ];

  const appointmentTypes = [
    "General Checkup",
    "Cleaning",
    "Filling",
    "Root Canal",
    "Crown",
    "Extraction",
    "Orthodontic Consultation",
    "Emergency Visit",
  ];

  const validateForm = () => {
    const newErrors: Partial<AppointmentData> = {};

    if (!formData.patientId) {
      newErrors.patientId = "Please select a patient";
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = "Appointment date is required";
    }

    if (!formData.appointmentTime) {
      newErrors.appointmentTime = "Appointment time is required";
    }

    if (!formData.appointmentType) {
      newErrors.appointmentType = "Appointment type is required";
    }

    if (!formData.dentist) {
      newErrors.dentist = "Please select a dentist";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof AppointmentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePatientSelect = (patientId: string) => {
    const patient = mockPatients.find((p) => p.id === patientId);
    setFormData((prev) => ({
      ...prev,
      patientId,
      patientName: patient?.name || "",
    }));
    if (errors.patientId) {
      setErrors((prev) => ({ ...prev, patientId: undefined }));
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
          Schedule New Appointment
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Create a new appointment for a patient
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patient Selection */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Select Patient *
            </label>
            <select
              value={formData.patientId}
              onChange={(e) => handlePatientSelect(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                errors.patientId
                  ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
                  : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
              } text-slate-800 dark:text-slate-200`}
              disabled={isLoading}
            >
              <option value="">Select a patient</option>
              {mockPatients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
            {errors.patientId && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.patientId}
              </p>
            )}
          </div>

          {/* Appointment Date */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Appointment Date *
            </label>
            <input
              type="date"
              value={formData.appointmentDate}
              onChange={(e) => handleChange("appointmentDate", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                errors.appointmentDate
                  ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
                  : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
              } text-slate-800 dark:text-slate-200`}
              disabled={isLoading}
            />
            {errors.appointmentDate && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.appointmentDate}
              </p>
            )}
          </div>

          {/* Appointment Time */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Appointment Time *
            </label>
            <input
              type="time"
              value={formData.appointmentTime}
              onChange={(e) => handleChange("appointmentTime", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                errors.appointmentTime
                  ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
                  : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
              } text-slate-800 dark:text-slate-200`}
              disabled={isLoading}
            />
            {errors.appointmentTime && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.appointmentTime}
              </p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Duration (minutes)
            </label>
            <select
              value={formData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              disabled={isLoading}
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
              <option value="120">120 minutes</option>
            </select>
          </div>

          {/* Appointment Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Appointment Type *
            </label>
            <select
              value={formData.appointmentType}
              onChange={(e) => handleChange("appointmentType", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                errors.appointmentType
                  ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
                  : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
              } text-slate-800 dark:text-slate-200`}
              disabled={isLoading}
            >
              <option value="">Select appointment type</option>
              {appointmentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.appointmentType && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.appointmentType}
              </p>
            )}
          </div>

          {/* Dentist */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Assigned Dentist *
            </label>
            <select
              value={formData.dentist}
              onChange={(e) => handleChange("dentist", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                errors.dentist
                  ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
                  : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
              } text-slate-800 dark:text-slate-200`}
              disabled={isLoading}
            >
              <option value="">Select a dentist</option>
              {mockDentists.map((dentist) => (
                <option key={dentist} value={dentist}>
                  {dentist}
                </option>
              ))}
            </select>
            {errors.dentist && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.dentist}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => handleChange("status", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              disabled={isLoading}
            >
              <option value="scheduled">Scheduled</option>
              <option value="confirmed">Confirmed</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="no-show">No Show</option>
            </select>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
              placeholder="Enter any additional notes or special instructions"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Scheduling...
              </div>
            ) : (
              "Schedule Appointment"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewAppointmentForm;
