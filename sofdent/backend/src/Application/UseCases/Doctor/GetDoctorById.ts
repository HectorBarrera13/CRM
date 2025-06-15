import { DoctorRepository } from "../../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../../Domain/Entities/Doctor";

export class GetDoctorById {
  constructor(private readonly repository: DoctorRepository) {}

  async execute(id: string): Promise<Doctor | null> {
    const doctor = await this.repository.findById(id);
    if (!doctor) {
      throw new Error("Doctor not found");
    }
    return doctor;
  }
}
