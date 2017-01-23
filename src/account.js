function Account() {
  this._balance = 0;
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

Account.prototype.pad = function(string) {
  padLeft = true;
  padding = '           '
  if (typeof string === 'undefined')
  return padding;
  if (padLeft) {
    return (padding + string).slice(-padding.length);
  } else {
    return (string + padding).substring(0, padding.length);
  }
};

Account.prototype.firstLine = function() {
  var columns = [this.pad('date'), this.pad('credit'), this.pad('debit'), this.pad('balance')];
  return columns.join('||');
};
