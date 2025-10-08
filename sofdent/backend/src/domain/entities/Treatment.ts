export class Treatment {
  private idTreatment: Number;

  constructor(
    private treatmentName: String,
    private estimatedPrice: Number,
    private estimatedDuration: Number
  ) {
    this, (this.idTreatment = 0);
  }
}
