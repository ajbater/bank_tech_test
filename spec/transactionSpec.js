'use strict';

describe('Transaction', function() {
  var newTransaction;

  beforeEach(function() {
    newTransaction = new Transaction('withdraw', 500, '10-01-2012');
  });

  it('has a type, which will be passed upon instantiation', function() {
    expect(newTransaction._type).toEqual('withdraw');
  });

  it('has an amount, which will be an integer', function() {
    expect(newTransaction._amount).toEqual(500);
  });

  it('has a date, which will be a date object', function() {
    expect(newTransaction._date).toEqual(jasmine.any(Date));
  });
});
