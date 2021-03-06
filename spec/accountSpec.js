'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it('stores the balance, which should be 0 upon instantiation', function() {
    expect(account._balance).toEqual(0);
  });

  it('each new instance of account has a statement', function() {
    expect(account._statement).toEqual(jasmine.any(Statement));
  });

  describe('depositing funds', function() {
    beforeEach(function() {
      account.deposit(500.00);
    });

    it('has a deposit function which adds the amount passed in to the account balance', function() {
      expect(account._balance).toEqual(500.00)
    });

    it('making a withdrawal will add a new transaction to the statement', function() {
      expect(account._statement._transactionHistory.length).toEqual(1);
    });

    it('making a deposit will create a new transaction object', function() {
      expect(account._statement._transactionHistory[0]).toEqual(jasmine.any(Transaction))
    });

    it('making a deposit will pass the new balance to the transaction object', function() {
      expect(account._statement._transactionHistory[0]._newBalance).toEqual(500.00);
    });
  });

  describe('withdrawing funds', function() {
    beforeEach(function() {
      account.withdraw(500.00);
    });

    it('has a withdraw function which deducts the amount passed in from the account balance', function() {
      expect(account._balance).toEqual(-500.00);
    });

    it('making a withdrawal will add a new transaction to the statement', function() {
      expect(account._statement._transactionHistory.length).toEqual(1);
    });

    it('making a withdrawal will create a new transaction object', function() {
      expect(account._statement._transactionHistory[0]).toEqual(jasmine.any(Transaction))
    });

    it('making a withdrawal will pass the new balance to the transaction object', function() {
      expect(account._statement._transactionHistory[0]._newBalance).toEqual(-500.00);
    });
  });

  describe('requesting the statement', function() {
    beforeEach(function() {
      account.deposit(500);
      account.withdraw(50);
    });

    // it('has a function that prepares a statement', function() {
    //   expect('prepareStatement' in account).toBe(true);
    // });
    //
    // it('can prepare the statement by getting each transaction ready', function() {
    //   account.prepareStatement();
    //
    // });
  });
});
