export class Laboratory {
  private _idLaboratory: number;
  private _laboratoryName: string;
  private _laboratoryPhone: string;

  constructor(laboratoryName: string, laboratoryPhone: string) {
    this._idLaboratory = 0;
    this._laboratoryName = laboratoryName;
    this._laboratoryPhone = laboratoryPhone;
  }

  get idLaboratory(): number {
    return this._idLaboratory;
  }
  set idLaboratory(value: number) {
    this._idLaboratory = value;
  }

  get laboratoryName(): string {
    return this._laboratoryName;
  }
  set laboratoryName(value: string) {
    this._laboratoryName = value;
  }

  get laboratoryPhone(): string {
    return this._laboratoryPhone;
  }
  set laboratoryPhone(value: string) {
    this._laboratoryPhone = value;
  }
}
