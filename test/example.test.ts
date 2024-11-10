import { describe, expect, test } from '@jest/globals';
import { User } from '../src/models/user';
import { AccountType } from '../src/models/account';
import { ConsumptionCategory } from '../src/models/consumption';
import { Currency } from '../src/models/currency';

function initizalizeUser(): [User, number, number] {
  const user = new User(1, 'John Doe', 100);
  const saving_id = user.addAccount(100, 'Bank of America', AccountType.Savings, Currency.ARG);
  const credit_id = user.addAccount(100, 'Bank of Province', AccountType.Credit);
  return [user, saving_id, credit_id];
}

describe('payments', () => {
  
  test('pay with cash', () => {
    const [user, , ] = initizalizeUser();
    const consuption_id = user.addConsumption('Verdulería',ConsumptionCategory.Food, 10, Currency.ARG ,1, 1);
    user.payConsumption(consuption_id);
    expect(user.cash_balance).toBe(90);
  });

  test('pay with saving account', () => {
    const [user, saving, ] = initizalizeUser();
    const consuption_id = user.addConsumption('Verdulería',ConsumptionCategory.Food, 20, Currency.ARG ,1, 1);
    user.payConsumption(consuption_id, saving);
    const balance = user.getAccountBalance(saving);
    expect(balance).toBe(80);
  });

  test('pay with credit account', () => {
    const [user, saving, ] = initizalizeUser();
    const consuption_id = user.addConsumption('Verdulería',ConsumptionCategory.Food, 20, Currency.ARG ,1, 1);
    user.payConsumption(consuption_id, saving);
    const balance = user.getAccountBalance(saving);
    expect(balance).toBe(80);
  });
});
