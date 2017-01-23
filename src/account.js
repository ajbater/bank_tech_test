function Account() {
  this._balance = 0;
  this._transactions = [];
};

Account.prototype.deposit = function(amount) {
  this._balance += amount;
};

Account.prototype.withdraw = function() {
  
};
