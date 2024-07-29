import { Currency } from "./currency";

export enum AccountType {
  Savings,
  Investment,
  Credit,
}

export class Account {
  balance: number;
  currency?: Currency;
  bank: string;
  type: AccountType;

  constructor(
    balance: number,
    bank: string,
    type: AccountType,
    currency?: Currency,
  ) {
    this.balance = balance;
    if (currency == undefined && type == AccountType.Savings) {
      throw new Error('Currency must be defined for savings accounts');
    }
    this.currency = currency;
    this.bank = bank;
    this.type = type;
  }
}
