export class ConsultingRoom {
  private _idRoom: number;
  constructor() {
    this._idRoom = 0;
  }

  get idRoom(): number {
    return this._idRoom;
  }
}
