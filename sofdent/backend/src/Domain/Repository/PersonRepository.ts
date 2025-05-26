import { Repository } from "./Repository"; // ruta según tu estructura
import { Person } from "../Entities/Person"; // ruta ejemplo

export interface PersonRepository extends Repository<Person> {
  // Aquí puedes agregar métodos específicos para Patient si los necesitas
  findByEmail(email: string): Promise<Person | null>;
  findByPhone(phone: string): Promise<Person | null>;
  findByName(name: string): Promise<Person[]>;
  findDebtors(): Promise<Person[]>; // Personas con deudas
}
