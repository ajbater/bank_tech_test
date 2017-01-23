'use strict';

describe('statement', function() {
  var statement;

  beforeEach(function() {
    statement = new Statement();
  });

  it('has the capacity to store transactions', function() {
    expect(statement._transactionHistory).toEqual([]);
  });

  it('is instantiated with a statementPresentation object', function() {
    expect(statement._statementPresentation).toEqual(jasmine.any(StatementPresentation));
  });
});
