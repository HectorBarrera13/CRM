import { Repository } from "./Repository"; // ruta según tu estructura
import { Person } from "../Entities/Person"; // ruta ejemplo

export interface PatientRepository extends Repository<Person> {
  // Aquí puedes agregar métodos específicos para Patient si los necesitas
  findByEmail(email: string): Promise<Person | null>;
  findByPhone(phone: string): Promise<Person | null>;
  findAllWithDebt(): Promise<Person[]>;
}
