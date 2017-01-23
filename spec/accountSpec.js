'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it('stores the balance, which should be 0 upon instantiation', function() {
    expect(account._balance).toEqual(0);
  });

  it('has the capacity to store transactions', function() {
    expect(account._transactionHistory).toEqual([]);
  });

  it('has a deposit function which adds the amount passed in to the account balance', function() {
    account.deposit(500);
    expect(account._balance).toEqual(500)
  });

  it('has a withdraw function which deducts the amount passed in from the account balance', function() {
    account.withdraw(500);
    expect(account._balance).toEqual(-500);
  });

  it('making a deposit will add a new transaction to the transaction history', function() {
    account.deposit(500);
    expect(account._transactionHistory.length).toEqual(1);
  });

  it('making a withdrawal will add a new transaction to the transaction history', function() {
    account.withdraw(500);
    expect(account._transactionHistory.length).toEqual(1);
  });
});
