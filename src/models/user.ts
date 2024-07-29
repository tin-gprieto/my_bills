import { Account, AccountType } from './account';
import { Consumption, ConsumptionCategory } from './consumption';
import { Currency } from './currency';
import { PaymentMethod } from './payment';


function get_id(obj: { [id: number]: unknown }) {
  const keys = Object.keys(obj);
  return keys.length > 0 ? Number(keys.sort().pop()) + 1 : 1;
}

export class User {
  id: number;
  name: string;
  cash_balance: number;
  accounts: { [id: number]: Account };
  consuptions: { [id: number]: Consumption };

  constructor(id: number, name: string, cash_amount: number) {
    this.id = id;
    this.name = name;
    this.cash_balance = cash_amount;
    this.accounts = {};
    this.consuptions = [];
  }

  addAccount(
    balance: number,
    bank: string,
    type: AccountType,
    currency?: Currency,
  ) {
    const id = get_id(this.accounts);
    const account = new Account(balance, bank, type, currency);
    this.accounts[id] = account;
  }

  addConsumption(
    ref: string,
    cat: ConsumptionCategory,
    amount: number,
    currency: Currency,
    method: PaymentMethod,
    totalInstallments?: number,
  ) {
    const id = get_id(this.consuptions);
    const consumption = new Consumption(
      ref,
      cat,
      amount,
      currency,
      method,
      totalInstallments,
    );
    this.consuptions[id] = consumption;
    return id;
  }

  payConsumption(id: number, account_id?: number) {
    if (account_id) {
        this.accounts[account_id].balance = this.consuptions[id].pay(this.accounts[account_id].balance);
    } else {
        this.cash_balance = this.consuptions[id].pay(this.cash_balance);
    }
  }

}

