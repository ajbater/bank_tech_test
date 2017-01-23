'use strict';

describe('statement', function() {
  var statement;

  beforeEach(function() {
    statement = new Statement();
  });

  it('can store transactions', function() {
    expect(statement._transactions).toEqual([]);
  });

  it('can add the correct amount of whitespace to strings', function() {
    expect(statement.pad(123)).toEqual('        123');
  });

  it('can print the first line of the statement', function() {
    expect(statement.firstLine()).toEqual('       date||     credit||      debit||    balance')
  });
});
