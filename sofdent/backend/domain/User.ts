export class User {
  private idUser: Number;

  constructor(private login: String, private hash: String) {
    this.idUser = 0;
  }
}
