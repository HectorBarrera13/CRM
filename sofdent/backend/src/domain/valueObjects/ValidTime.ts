export class ValidTime {
  private _validTime: string;
  constructor(time: string) {
    if (!time) {
      throw new Error("La hora no puede ser vacía");
    }
    const validTimeRagex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    if (validTimeRagex.test(time)) {
      this._validTime = time;
    } else throw new Error("Formato de Hora invalida");
  }
}
