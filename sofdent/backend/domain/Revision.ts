import { Treatment } from "./Treatment";
import { Patient } from "./Patient";

export class Revision {
  constructor(
    private date: Date,
    private treatment: Treatment,
    private patient: Patient
  ) {}
}
