function Account() {
  this._balance = 0;
  this._transactionHistory = [];
};

Account.prototype.deposit = function(amount, date) {
  this._balance += amount;
  var transaction = new Transaction('deposit', amount, date)
  this._transactionHistory.push(transaction);
};

Account.prototype.withdraw = function(amount) {
  this._balance -= amount;
};
