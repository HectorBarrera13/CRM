export abstract class Person {
  private readonly idPerson: Number;

  constructor(
    private firstNames: String,
    private lastNames: String,
    private email: String,
    private phone: String,
    private birthDate: String,
    private reputation: String,
    private address: String,
    private city: String,
    private state: String,
    private country: String
  ) {
    this.idPerson = 0;
  }
}
