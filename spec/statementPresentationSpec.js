'use strict';

describe('StatementPresentation', function() {
  var statementPresentation;

  beforeEach(function() {
    statementPresentation = new StatementPresentation();
  });

  it('has a function that formats the date', function() {
    var date = new Date('01-23-2017')
    expect(statementPresentation.formatDate(date)).toEqual('23/01/2017')
  });

  it('has a function that adds padding to strings', function() {
    expect(statementPresentation.pad(123)).toEqual('        123');
  });

  it('has first line function that creates the first line of the statement', function() {
    expect(statementPresentation.firstLine()).toEqual('       date ||     credit ||      debit ||    balance')
  });
});
