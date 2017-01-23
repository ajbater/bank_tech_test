// responsible for: recording the details of each transaction
function Transaction(amountCredited, amountDebited, newBalance) {
  this._date = new Date;
  this._amountCredited = amountCredited;
  this._amountDebited = amountDebited;
  this._newBalance = newBalance;

  // Transaction.prototype.formatDate = function() {
  //   date = this._date
  //   day = '' + date.getDate(),
  //   month = '' + (date.getMonth() + 1),
  //   year = date.getFullYear();
  //   if (month.length < 2) month = '0' + month;
  //   if (day.length < 2) day = '0' + day;
  //   return [day, month, year].join('/');
  // };
};
