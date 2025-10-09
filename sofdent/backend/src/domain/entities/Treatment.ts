export class Treatment {
  private _idTreatment: number;
  private _treatmentName: string;
  private _estimatedPrice: number;
  private _estimatedDuration: number;
  constructor(
    tratmentName: string,
    estimatedPrice: number,
    estimatedDuration: number
  ) {
    this._idTreatment = 0;
    this._treatmentName = tratmentName;
    this._estimatedPrice = estimatedPrice;
    this._estimatedDuration = estimatedDuration;
  }

  get idTreatment(): number {
    return this._idTreatment;
  }

  get treatmentName(): string {
    return this._treatmentName;
  }
  set treatmentName(value: string) {
    this._treatmentName = value;
  }

  get estimatedPrice(): number {
    return this._estimatedPrice;
  }
  set estimatedPrice(value: number) {
    this._estimatedPrice = value;
  }

  get estimatedDuration(): number {
    return this._estimatedDuration;
  }
  set estimatedDuration(value: number) {
    this._estimatedDuration = value;
  }
}
