import { describe, expect, test } from '@jest/globals';
import { User } from '../src/models/user';
import { AccountType } from '../src/models/account';
import { ConsumptionCategory } from '../src/models/consumption';
import { Currency } from '../src/models/currency';

function initizalizeUser() {
  const user = new User(1, 'John Doe', 100);
  user.addAccount(100, 'Bank of America', AccountType.Savings, Currency.ARG);
  user.addAccount(100, 'Bank of Province', AccountType.Credit);
  return user;
}

describe('pay with cash', () => {
  test('class example test', () => {
    const user = initizalizeUser();
    const consuption_id = user.addConsumption('Verdulería',ConsumptionCategory.Food, 10, Currency.ARG ,1, 1);
    user.payConsumption(consuption_id);
    expect(user.cash_balance).toBe(90);
  });
});
