function Transaction(type, amount, date, newBalance) {
  this._type = type;
  this._amount = amount;
  this._date = new Date(date);
  this._newBalance = newBalance;
};
