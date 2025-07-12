import { Repository } from "./Repository"; // ruta según tu estructura
import { Person } from "../Entities/Person"; // ruta ejemplo

export interface PersonRepository extends Repository<Person> {
  // Aquí puedes agregar métodos específicos para Patient si los necesitas
  findByName(name: string): Promise<Person[] | null>; // Método para buscar por nombre
}
