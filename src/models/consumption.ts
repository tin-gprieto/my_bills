import { Currency } from './currency';
import { Payment, PaymentMethod } from './payment';

export enum ConsumptionCategory {
  Food,
  Clothing,
  Rent,
  Service,
  Entertainment,
  Transport,
  Taxes,
  Other,
}

export class Consumption {
  date: Date;
  reference: string;
  categoty: ConsumptionCategory;
  payment: Payment;

  constructor(
    ref: string,
    cat: ConsumptionCategory,
    amount: number,
    currency: Currency,
    method: PaymentMethod,
    totalInstallments?: number,
  ) {
    this.date = new Date();
    this.reference = ref;
    this.categoty = cat;
    this.date = new Date();
    this.payment = new Payment(amount, currency, method, totalInstallments);
  }

  pay(balance: number) {
    return this.payment.pay(balance);
  }
}
