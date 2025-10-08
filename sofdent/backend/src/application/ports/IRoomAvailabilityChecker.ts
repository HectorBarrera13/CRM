import { ValidDate } from "../../domain/valueObjects/ValidDate";
import { ValidTime } from "../../domain/valueObjects/ValidTime";

export interface IRoomAvailabilityChecker {
  isAvailable(
    idRoom: number,
    date: ValidDate,
    time: ValidTime,
    duration: number
  ): Promise<boolean>;
}

//HACER LAS INTERFACES
