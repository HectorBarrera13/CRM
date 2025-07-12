import type { Doctor } from "../models/Doctor";

export interface DoctorResponse {
  message: string;
  idDoctor?: string; // opcional si a veces no lo envía
}

export const createDoctor = async (
  doctor: Doctor
): Promise<{ status: number; data: DoctorResponse }> => {
  const res = await fetch("http://localhost:3000/api/doctor/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(doctor),
  });

  const data = (await res.json()) as DoctorResponse;
  return { status: res.status, data };
};
