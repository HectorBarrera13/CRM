export class Person {
  constructor(
    public readonly idPerson?: number | null,
    public names?: string | null,
    public lastNames?: string | null,
    public email?: string | null,
    public phone?: string | null,
    public address?: string | null,
    public birthDate?: string | null
  ) {}

  static createPerson(obj: any): Person {
    return new Person(
      obj.idPerson,
      obj.names,
      obj.lastNames,
      obj.email,
      obj.phone,
      obj.address,
      obj.birthDate
    );
  }
}
