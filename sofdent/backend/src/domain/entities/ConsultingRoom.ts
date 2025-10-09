export class ConsultingRoom {
  private _idRoom: number;
  private _roomName: string;

  constructor(roomName: string) {
    this._idRoom = 0;
    this._roomName = roomName;
  }

  get idRoom(): number {
    return this._idRoom;
  }
}
