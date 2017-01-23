'use strict';

describe('StatementPresentation', function() {
  var statementPresentation;

  beforeEach(function() {
    statementPresentation = new StatementPresentation();
  });

  it('stores each row of the statement', function() {
    expect(statementPresentation._rows).toEqual([]);
  });

  it('has a function that formats the date', function() {
    var date = new Date('01-23-2017')
    expect(statementPresentation.formatDate(date)).toEqual('23/01/2017')
  });

  it('has a function that adds padding to strings', function() {
    expect(statementPresentation.pad(123)).toEqual('        123');
  });

  it('has first line function that creates the first line of the statement', function() {
    statementPresentation.columnHeaders();
    expect(statementPresentation._rows[0]).toEqual('       date ||     credit ||      debit ||    balance')
  });

  it('has a print statement function', function() {
    expect('printStatement' in statementPresentation).toBe(true);
  });
});
