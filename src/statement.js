// responsible for: keeping track of all transactions
function Statement() {
  this._transactionHistory = [];
  this._statementPresentation = new StatementPresentation();
};
