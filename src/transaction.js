function Transaction(type, amount, newBalance) {
  this._type = type;
  this._amount = amount.toFixed(2);
  this._date = new Date;
  this._newBalance = newBalance.toFixed(2);

  Transaction.prototype.formatDate = function() {
    date = this._date
    day = '' + date.getDate(),
    month = '' + (date.getMonth() + 1),
    year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('/');
  };
};
