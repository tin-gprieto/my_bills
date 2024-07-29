import { Currency } from "./currency";

export enum PaymentMethod {
  CreditCard,
  DebitCard,
  Cash,
}

export class Payment {
  date?: Date;
  amount: number;
  currency: Currency;
  method?: PaymentMethod;
  paidInstallments?: number;
  totalInstallments?: number;
  paid: boolean;

  constructor(
    amount: number,
    currency: Currency,
    method: PaymentMethod,
    totalInstallments?: number,
  ) {
    this.date = new Date();
    this.amount = amount;
    this.currency = currency;
    this.method = method;
    if (method == PaymentMethod.CreditCard) {
      if (totalInstallments == undefined) {
        throw new Error(
          'Total installments must be defined for credit card payments',
        );
      } else {
        this.totalInstallments = totalInstallments;
        this.paidInstallments = 0;
        this.paid = false;
      }
    }
  }

  pay(balance: number) {
    this.date = new Date();
    if (this.method == PaymentMethod.CreditCard) {
        if (this.totalInstallments == undefined) {
            throw new Error(
                'Total installments must be defined for credit card payments',
            );
        } 
        balance -= this.amount / this.totalInstallments;
        this.paidInstallments = +1;
        if (this.paidInstallments == this.totalInstallments) {
            this.paid = true;
        }
    } else {
        balance -= this.amount;
        this.paid = true;
    }
    return balance;
  }
}
