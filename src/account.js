// responsible for: managing the balance
function Account() {
  this._balance = 0.00;
  this._statement = new Statement();
};

Account.prototype.deposit = function(amount) {
  this._balance += amount;
  newBalance = this._balance;
  transaction = new Transaction(amount, null, newBalance);
  this._statement._transactionHistory.push(transaction);
};

Account.prototype.withdraw = function(amount) {
  this._balance -= amount;
  newBalance = this._balance;
  transaction = new Transaction(null, amount, newBalance);
  this._statement._transactionHistory.push(transaction);
};

// Account.prototype.createTransaction = function(type, amount) {
//   var newBalance = this._balance;
//   var transaction = new Transaction(type, amount, newBalance);
//   this._transactionHistory.push(transaction);
// };
