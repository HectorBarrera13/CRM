import { useState } from "react";
import AddNewPatientForm from "../formPages/AddNewPatientForm";

interface PatientData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  zipCode: string;
  emergencyContact: string;
  emergencyPhone: string;
  medicalHistory: string;
  allergies: string;
  insuranceProvider: string;
  insuranceNumber: string;
}

function PatientsPage() {
  const [showPatientForm, setShowPatientForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewPatient = () => {
    setShowPatientForm(true);
  };

  const handleCancelPatient = () => {
    setShowPatientForm(false);
  };

  const handleSubmitPatient = async (patientData: PatientData) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("New patient created:", patientData);
      setIsSubmitting(false);
      setShowPatientForm(false);
      // Here you would typically show a success message
      alert("Patient added successfully!");
    }, 1500);
  };

  // If showing the patient form, render it instead of the patient list
  if (showPatientForm) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              Add New Patient
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Enter patient information to create a new record
            </p>
          </div>
          <button
            onClick={handleCancelPatient}
            className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Back to Patients
          </button>
        </div>

        <AddNewPatientForm
          onSubmit={handleSubmitPatient}
          onCancel={handleCancelPatient}
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
            Patients
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage your patient database
          </p>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          onClick={handleNewPatient}
        >
          Add New Patient
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
              Patient List
            </h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search patients..."
                className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
              />
              <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                Filter
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {i}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Patient {i}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      patient{i}@example.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    View
                  </button>
                  <button className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientsPage;
