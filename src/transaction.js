function Transaction(type, amount, date) {
  this._type = type;
  this._amount = amount;
  this._date = new Date(date);
};
