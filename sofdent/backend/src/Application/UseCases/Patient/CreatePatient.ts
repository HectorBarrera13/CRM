import { PatientRepository } from "../../../Domain/Repository/PatientRepository";
import { Patient } from "../../../Domain/Entities/Patient";
import { Person } from "../../../Domain/Entities/Person";
import { CreatePerson } from "../Person/CreatePerson";

export class CreatePatient {
  constructor(
    private readonly repository: PatientRepository,
    private createPerson: CreatePerson
  ) {}

  async execute(person: Person, patient: Patient): Promise<void> {
    const dataPerson = await this.createPerson.execute(person);
    console.log("Resultado de creación de persona:", dataPerson);
    if (dataPerson.status === "success" || dataPerson.status === "duplicate") {
      if (
        dataPerson.idPerson &&
        (await this.repository.findByPersonId(dataPerson.idPerson))
      ) {
        return;
      }
      patient.idPerson = dataPerson.idPerson; // Asignar el ID de la persona creada o existente
    }
    // Verificar si el Patient ya existe
    await this.repository.save(patient);
  }
}
