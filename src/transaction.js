// responsible for: recording the details of each transaction
function Transaction(amountCredited, amountDebited, newBalance) {
  this._date = new Date;
  this._amountCredited = amountCredited;
  this._amountDebited = amountDebited;
  this._newBalance = newBalance;
};
