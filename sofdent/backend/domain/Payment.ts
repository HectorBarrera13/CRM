export class Payment {
  private readonly idPayment;

  constructor(
    private date: Date,
    private amount: Number,
    private paymentMethod: String
  ) {
    this.idPayment = 0;
  }
}
