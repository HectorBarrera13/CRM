import { Repository } from "./Repository"; // ruta según tu estructura
import { Debt } from "../Entities/Debt"; // ruta ejemplo

export interface PatientRepository extends Repository<Debt> {
  // Aquí puedes agregar métodos específicos para Patient si los necesitas
  findAllWithDebt(): Promise<Debt[]>;
}
