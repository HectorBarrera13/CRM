import { DoctorRepository } from "../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../Domain/Entities/Doctor";

export class DoctorService {
  constructor(private readonly repository: DoctorRepository) {}

  async createDoctor(doctor: Doctor): Promise<void> {
    await this.repository.save(doctor);
  }

  async getDoctorById(id: string): Promise<Doctor | null> {
    return this.repository.findById(id);
  }

  async getAllDoctors(): Promise<Doctor[]> {
    return this.repository.findAll();
  }

  async updateDoctor(doctor: Doctor): Promise<void> {
    await this.repository.update(doctor);
  }

  async deleteDoctor(doctor: Doctor): Promise<void> {
    await this.repository.delete(doctor);
  }

  async findWithUpcomingAppointments(): Promise<Doctor[]> {
    return this.repository.findWithUpcomingAppointments();
  }

  async findUpcomingAppointmentsByDoctorId(
    doctorId: string
  ): Promise<Doctor[]> {
    return this.repository.findUpcomingAppointmentsByDoctorId(doctorId);
  }

  async findBySpeciality(speciality: string): Promise<Doctor[]> {
    return this.repository.findBySpeciality(speciality);
  }
}
