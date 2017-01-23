'use strict';

describe('Transaction', function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction(500.00, null, 500);
  });

  it('has a date, which will be a date object', function() {
    expect(transaction._date).toEqual(jasmine.any(Date));
  });

  it('has an amount credited', function() {
    expect(transaction._amountCredited).toEqual(500.00);
  });

  it('has an amount debited', function() {
    expect(transaction._amountDebited).toBe(null);
  });

  it('has a new balance property which gives the updated balance after each transaction', function() {
    expect(transaction._newBalance).toEqual(500);
  });
});
