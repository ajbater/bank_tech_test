function Account() {
  this._balance = 0.00;
  this._transactionHistory = [];
  this._statement = new Statement();
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
// 
// Account.prototype.addTransactionToStatement = function() {
//   for (i = 0; i < this._transactionHistory.length; i++) {
//     if (this._transactionHistory[i]._type === 'deposit') {
//       var transaction = [(this._transactionHistory[i]._date.formatDate()), (this._transactionHistory[i]._amount), undefined, (this._transactionHistory[i]._newBalance)];
//       this._statement._transactions.push(transaction);
//     } else {
//       var transaction = [(this._transactionHistory[i]._date.formatDate()), undefined, (this._transactionHistory[i]._amount), (this._transactionHistory[i]._newBalance)];
//       this._statement._transactions.push(transaction);
//     }
//   }
// };
