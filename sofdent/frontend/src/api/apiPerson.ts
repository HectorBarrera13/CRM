import type { Person } from "../models/Person";

export interface PersonResponse {
  message: string;
  idPerson?: string; // opcional si a veces no lo envía
}

export const createPerson = async (
  person: Person
): Promise<{ status: number; data: PersonResponse }> => {
  const res = await fetch("http://localhost:3000/api/person/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(person),
  });

  const data = (await res.json()) as PersonResponse;
  return { status: res.status, data };
};

export const searchPersonByName = async (
  name: string
): Promise<{ status: number; data: Person[] }> => {
  const res = await fetch(`http://localhost:3000/api/person/search/${name}`);
  const data = (await res.json()) as Person[];
  return { status: res.status, data };
};
