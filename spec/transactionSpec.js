'use strict';

describe('Transaction', function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction('withdraw', 500);
  });

  it('has a type, which will be passed upon instantiation', function() {
    expect(transaction._type).toEqual('withdraw');
  });

  it('has an amount, which will be an integer', function() {
    expect(transaction._amount).toEqual(500);
  });

  it('has a date, which will be a date object', function() {
    expect(transaction._date).toEqual(jasmine.any(Date));
  });

  it('has a method that formats the date into a string', function() {
    var date = new Date('01-23-2017');
    jasmine.clock().mockDate(date);
    expect(transaction.formatDate()).toEqual('23/01/2017');
  });

  it('has a new balance property', function() {
    expect('_newBalance' in transaction).toBe(true);
  });
});
