// responsible for: keeping track of all transactions
function Statement() {
  this._transactionHistory = [];
  this._statementPresentation = new StatementPresentation();
};

Statement.prototype.prepareStatement = function() {
  this._statementPresentation.columnHeaders();
  for (i = 0; i < (this._transactionHistory).length; i++) {
    row = ''
    date = this._statementPresentation.formatDate(this._transactionHistory[i]._date);
    row += date + ' ||'
    credit = this._statementPresentation.pad(this._transactionHistory[i]._amountCredited);
    row += credit + ' ||'
    debit = this._statementPresentation.pad(this._transactionHistory[i]._amountDebited);
    row += debit + ' ||'
    balance = this._statementPresentation.pad(this._transactionHistory[i]._newBalance);
    this._statementPresentation._rows.push(row);
  }
};
