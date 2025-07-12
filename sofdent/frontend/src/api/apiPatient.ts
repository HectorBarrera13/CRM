import type { Patient } from "../models/Patient";

export interface PatientResponse {
  message: string;
  idPatient?: string; // opcional si a veces no lo envía
}

export const createPatient = async (
  patient: Patient
): Promise<{ status: number; data: PatientResponse }> => {
  const res = await fetch("http://localhost:3000/api/patient/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patient),
  });

  const data = (await res.json()) as PatientResponse;
  return { status: res.status, data };
};
