export class Notes {
  private readonly idNote: Number;

  constructor(
    private date: Date,
    private state: String,
    private title: String,
    private description: String
  ) {
    this.idNote = 0;
  }
}
