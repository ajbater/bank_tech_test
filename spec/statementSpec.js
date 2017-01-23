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

  it('has a function that prepares a statement', function() {
    expect('prepareStatement' in statement).toBe(true);
  });

  describe('requesting the statement', function() {
    it('can prepare the statement by getting each transaction ready', function() {
      statement.prepareStatement();
      expect(statement._statementPresentation._rows.length).toEqual(1);
    });
  });
});
