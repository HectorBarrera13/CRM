export interface Doctor {
  idDoctor: string | null; // puede ser null si aún no se ha asignado
  idPerson: string;
  speciality: string;
  color: string;
  debt: number;
}
