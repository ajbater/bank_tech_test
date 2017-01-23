'use strict';

describe('statement', function() {
  var statement;

  beforeEach(function() {
    statement = new Statement();
  });

  it('has the capacity to store transactions', function() {
    expect(statement._transactionHistory).toEqual([]);
  });
});
