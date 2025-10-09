import { ConsultingRoom } from "./ConsultingRoom";

export class Clinic {
  private _idClinic: number;
  private _clinicName: string;
  private _address: string;
  private _phone: string;
  private _consultingRooms: ConsultingRoom[];

  constructor(
    clinicName: string,
    address: string,
    phone: string,
    consultingRooms: ConsultingRoom[]
  ) {
    this._idClinic = 0;
    this._clinicName = clinicName;
    this._address = address;
    this._phone = phone;
    this._consultingRooms = consultingRooms;
  }

  get idClinic(): number {
    return this._idClinic;
  }

  get clinicName(): string {
    return this._clinicName;
  }
  set clinicName(value: string) {
    this._clinicName = value;
  }

  get address(): string {
    return this._address;
  }
  set address(value: string) {
    this._address = value;
  }

  get phone(): string {
    return this._phone;
  }
  set phone(value: string) {
    this._phone = value;
  }

  addConsultingRoom(newRoom: ConsultingRoom) {
    this._consultingRooms.push(newRoom);
  }
}
