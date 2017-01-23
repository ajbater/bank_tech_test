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

  describe('depositing funds', function() {
    beforeEach(function() {
      account.deposit(500);
    });

    it('has a deposit function which adds the amount passed in to the account balance', function() {
      expect(account._balance).toEqual(500)
    });

    it('making a deposit will add a new transaction to the transaction history', function() {
      expect(account._transactionHistory.length).toEqual(1);
    });

    it('making a deposit will create a new transaction object', function() {
      expect(account._transactionHistory[0]).toEqual(jasmine.any(Transaction))
    });

    it('making a deposit will pass the new balance to the transaction object', function() {
      expect(account._transactionHistory[0]._newBalance).toEqual(500);
    });
  });

  describe('withdrawing funds', function() {
    beforeEach(function() {
      account.withdraw(500);
    });

    it('has a withdraw function which deducts the amount passed in from the account balance', function() {
      expect(account._balance).toEqual(-500);
    });

    it('making a withdrawal will add a new transaction to the transaction history', function() {
      expect(account._transactionHistory.length).toEqual(1);
    });

    it('making a withdrawal will create a new transaction object', function() {
      expect(account._transactionHistory[0]).toEqual(jasmine.any(Transaction))
    });

    it('making a withdrawl will pass the new balance to the transaction object', function() {
      expect(account._transactionHistory[0]._newBalance).toEqual(-500);
    });
  });

  describe('requesting the statement', function() {
    beforeEach(function() {
      account.deposit(500);
      account.withdraw(50);
    });

    it('has a method for padding strings', function() {
      expect('pad' in account).toBe(true);
    });

    it('can add the correct amount of whitespace to strings', function() {
      expect(account.pad(123)).toEqual('        123');
    });
  });
});
