import { ValidDate } from "../valueObjects/ValidDate";

export abstract class Person {
  private _idPerson: number;
  private _firstNames: string;
  private _lastNames: string;
  private _email: string;
  private _phone: string;
  private _birthDate: ValidDate;
  private _reputation: string;
  private _address: string;
  private _city: string;
  private _country: string;

  constructor(
    firstNames: string,
    lastNames: string,
    email: string,
    phone: string,
    birthDate: ValidDate,
    reputation: string,
    address: string,
    city: string,
    country: string
  ) {
    this._idPerson = 0;
    this._firstNames = firstNames;
    this._lastNames = lastNames;
    this._email = email;
    this._phone = phone;
    this._birthDate = birthDate;
    this._reputation = reputation;
    this._address = address;
    this._city = city;
    this._country = country;
  }

  get idPerson(): number {
    return this._idPerson;
  }
  set idPerson(value: number) {
    this._idPerson = value;
  }

  get firstNames(): string {
    return this._firstNames;
  }
  set firstNames(value: string) {
    this._firstNames = value;
  }

  get lastNames(): string {
    return this._lastNames;
  }
  set lastNames(value: string) {
    this._lastNames = value;
  }

  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  get phone(): string {
    return this._phone;
  }
  set phone(value: string) {
    this._phone = value;
  }

  get birthDate(): ValidDate {
    return this._birthDate;
  }
  set birthDate(value: ValidDate) {
    this._birthDate = value;
  }

  get reputation(): string {
    return this._reputation;
  }
  set reputation(value: string) {
    this._reputation = value;
  }

  get address(): string {
    return this._address;
  }
  set address(value: string) {
    this._address = value;
  }

  get city(): string {
    return this._city;
  }
  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return this._country;
  }
  set country(value: string) {
    this._country = value;
  }
}
