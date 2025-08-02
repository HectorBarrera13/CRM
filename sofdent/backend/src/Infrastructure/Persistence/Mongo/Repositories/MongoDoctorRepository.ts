import { DoctorRepository } from "../../../../Domain/Repository/DoctorRepository";
import { Doctor } from "../../../../Domain/Entities/Doctor";
import { DoctorModel } from "../Schemas/DoctorSchema";

export class MongoDoctorRepository implements DoctorRepository {
  async save(doctor: Doctor): Promise<Doctor> {
    await DoctorModel.create(doctor);
    return doctor;
  }

  async findById(id: string): Promise<Doctor | null> {
    const doc = await DoctorModel.findOne({ idDoctor: id });
    if (!doc) return null;
    return Doctor.createDoctor(doc);
  }

  async findAll(): Promise<Doctor[]> {
    return DoctorModel.find().lean();
  }

  async update(doctor: Doctor): Promise<Doctor> {
    await DoctorModel.updateOne({ idDoctor: doctor.idDoctor }, doctor);
    return doctor;
  }

  async delete(doctor: Doctor): Promise<Doctor> {
    await DoctorModel.deleteOne({ idDoctor: doctor.idDoctor });
    return doctor;
  }

  async findByPersonId(idPerson: number): Promise<Doctor | null> {
    const doc = await DoctorModel.findOne({ idPerson }).lean();
    if (!doc) return null;
    return Doctor.createDoctor(doc);
  }
}
