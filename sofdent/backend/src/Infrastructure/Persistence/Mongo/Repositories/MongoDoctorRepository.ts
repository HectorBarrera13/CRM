import { DoctorRepository } from "../../../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../../../Domain/Entities/Doctor";
import { DoctorModel } from "../Schemas/DoctorSchema";

export class MongoDoctorRepository implements DoctorRepository {
  async save(doctor: Doctor): Promise<void> {
    await DoctorModel.create(doctor);
  }

  async findById(id: string): Promise<Doctor | null> {
    return DoctorModel.findOne({ idDoctor: Number(id) }).lean();
  }

  async findAll(): Promise<Doctor[]> {
    return DoctorModel.find().lean();
  }

  async update(doctor: Doctor): Promise<void> {
    await DoctorModel.updateOne({ idDoctor: doctor.idDoctor }, doctor);
  }

  async delete(doctor: Doctor): Promise<void> {
    await DoctorModel.deleteOne({ idDoctor: doctor.idDoctor });
  }
}
