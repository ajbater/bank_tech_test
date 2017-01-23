// the part of the program that a user would interact with
function Account() {
  this._balance = 0.00;
  this._statement = new Statement();
};

Account.prototype.deposit = function(amount) {
  this.credit(amount);
  newBalance = this._balance;
  transaction = new Transaction(amount, null, newBalance);
  this._statement._transactionHistory.push(transaction);
};

Account.prototype.withdraw = function(amount) {
  this.debit(amount);
  newBalance = this._balance;
  transaction = new Transaction(null, amount, newBalance);
  this._statement._transactionHistory.push(transaction);
};

Account.prototype.credit = function(amount) {
  this._balance += amount;
};

Account.prototype.debit = function(amount) {
  this._balance -= amount;
};
