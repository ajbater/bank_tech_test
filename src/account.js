function Account() {
  this._balance = 0;
  this._transactionHistory = [];
};

Account.prototype.deposit = function(amount) {
  this._balance += amount;
  newBalance = this._balance;
  var transaction = new Transaction('deposit', amount, newBalance);
  this._transactionHistory.push(transaction);
};

Account.prototype.withdraw = function(amount) {
  this._balance -= amount;
  newBalance = this._balance;
  var transaction = new Transaction('withdraw', amount, newBalance);
  this._transactionHistory.push(transaction);
};
