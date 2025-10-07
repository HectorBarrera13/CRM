export class Clinic {
  private readonly idClinic: Number;

  constructor(
    private clinicName: String,
    private address: String,
    private phone: String
  ) {
    this.idClinic = 0;
  }
}
