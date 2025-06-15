import { DoctorRepository } from "../../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../../Domain/Entities/Doctor";

export class GetAllDoctors {
  constructor(private readonly repository: DoctorRepository) {}
  async execute(): Promise<Doctor[]> {
    const doctors = await this.repository.findAll();
    if (!doctors || doctors.length === 0) {
      throw new Error("No doctors found");
    }
    return doctors;
  }
}
