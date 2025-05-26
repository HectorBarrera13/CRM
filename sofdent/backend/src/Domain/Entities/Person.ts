export class Person {
  constructor(
    public readonly idPerson?: number | null,
    public name?: string | null,
    public lastName?: string | null,
    public birthday?: string | null,
    public address?: string | null,
    public phone?: string | null,
    public email?: string | null
  ) {}
}
