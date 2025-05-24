import { useEffect, useState } from "react";

export function PatientsList() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/1")
      .then((res) => res.json())
      .then((data) => setPatient(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  if (!patient) return <div>Cargando...</div>;

  return console.log(patient);
}
