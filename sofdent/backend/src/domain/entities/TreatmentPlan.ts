import { Treatment } from "./Treatment.ts";
export class TreatmentPlan {
  private idPlan: Number;

  constructor(private services: Treatment[], private estimatedTotal: Number) {
    this.idPlan = 0;
  }
}
