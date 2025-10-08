export class Clinic {
  private _idClinic: Number;
  private _clinicName: String;
  private _address: String;
  private _phone: String;

  constructor(clinicName: string, address: string, phone: string) {
    this._idClinic = 0;
    this._clinicName = clinicName;
    this._address = address;
    this._phone = phone;
  }
}
