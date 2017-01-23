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
});
