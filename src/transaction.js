function Transaction(type, amount, newBalance) {
  this._type = type;
  this._amount = amount;
  this._date = new Date;
  this._newBalance = newBalance;
};
