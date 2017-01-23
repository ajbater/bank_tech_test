function Account() {
  this._balance = 0.00;
  this._transactionHistory = [];
};

Account.prototype.deposit = function(amount) {
  this._balance += amount;
  var type = 'deposit'
  this.createTransaction(type, amount);
};

Account.prototype.withdraw = function(amount) {
  this._balance -= amount;
  var type = 'withdraw';
  this.createTransaction(type, amount);
};

Account.prototype.createTransaction = function(type, amount) {
  var newBalance = this._balance;
  var transaction = new Transaction(type, amount, newBalance);
  this._transactionHistory.push(transaction);
};

Account.prototype.createStatement = function() {
  this._statement = new Statement();
};
