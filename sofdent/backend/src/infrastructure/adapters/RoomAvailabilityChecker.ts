import { IRoomAvailabilityChecker } from "../../application/ports/IRoomAvailabilityChecker";
import { ValidDate } from "../../domain/valueObjects/ValidDate";
import { ValidTime } from "../../domain/valueObjects/ValidTime";
import { IRoomRepository } from "../../domain/repositories/IRoomRepository";

export class roomAvailabilityChecker implements IRoomAvailabilityChecker {
  constructor(private readonly roomRepo: IRoomRepository) {}

  async isAvailable(
    idRoom: number,
    date: ValidDate,
    time: ValidTime,
    duration: number
  ): Promise<boolean> {
    return true;
  }
}
