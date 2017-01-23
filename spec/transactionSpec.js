'use strict';

describe('Transaction', function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction();
  });

  it('has a type of transaction, which will be set upon instantiation', function() {
    expect('_type' in transaction).toBe(true);
  });

  it('has an amount, which will be be set upon instantiation', function() {
    expect('_amount' in transaction).toBe(true);
  });

  it('has a date, which will be a date object', function() {
    var newTransaction = new Transaction('withdraw', 500, '10-01-2012');
    expect(newTransaction._date).toEqual(jasmine.any(Date));
  });
});
