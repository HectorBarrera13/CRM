import { DoctorRepository } from "../../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../../Domain/Entities/Doctor";
import { Person } from "../../../Domain/Entities/Person";
import { CreatePerson } from "../Person/CreatePerson";

export class CreateDoctor {
  constructor(
    private readonly repository: DoctorRepository,
    private createPerson: CreatePerson
  ) {}

  async execute(person: Person, doctor: Doctor): Promise<void> {
    const dataPerson = await this.createPerson.execute(person);
    console.log("Resultado de creación de persona:", dataPerson);
    if (dataPerson.status === "success" || dataPerson.status === "duplicate") {
      if (
        dataPerson.idPerson &&
        (await this.repository.findByPersonId(dataPerson.idPerson))
      ) {
        return;
      }
      doctor.idPerson = dataPerson.idPerson; // Asignar el ID de la persona creada o existente
    }
    // Verificar si el doctor ya existe
    await this.repository.save(doctor);
  }
}
