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
  accounts: { [id: number]: Account };
  consuptions: { [id: number]: Consumption };

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
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
    return id;
  }

  getAccountBalance(id: number) {
    return this.accounts[id].balance;
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

  payConsumption(id: number) {
    
  }

}

