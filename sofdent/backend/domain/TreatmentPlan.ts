import { Treatment } from "./Treatment.ts";
export class TreatmentPlan {
  private readonly idPlan: number;
  private services: Treatment[];
  private estimatedTotal: Number;
}
