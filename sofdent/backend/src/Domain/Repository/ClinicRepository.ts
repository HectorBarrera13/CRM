import { Repository } from "./Repository"; // ruta según tu estructura
import { Clinic } from "../Entities/Clinic";

export interface ClinicRepository extends Repository<Clinic> {}
