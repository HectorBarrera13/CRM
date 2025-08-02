import type { Patient } from "../models/Patient";
import type { Person } from "../models/Person";

export interface PatientResponse {
  message: string;
  idPatient?: string; // opcional si a veces no lo envía
}

export const createPatient = async (
  person: Person,
  patient: Patient
): Promise<{ status: number; data: PatientResponse }> => {
  const res = await fetch("http://localhost:3000/api/patient/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ person, patient }),
  });

  const data = (await res.json()) as PatientResponse;
  return { status: res.status, data };
};

export const searchPatientByName = async (
  name: string
): Promise<{ status: number; data: Patient[] }> => {
  console.log("Buscando paciente por nombreee:", name);

  const res = await fetch(`http://localhost:3000/api/patient/search/${name}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = (await res.json()) as Patient[];
  return { status: res.status, data };
};
