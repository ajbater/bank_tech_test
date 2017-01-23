// responsible for: keeping track of all transactions
function Statement() {
  this._transactionHistory = [];
};

// Statement.prototype.firstLine = function() {
//   var columns = [this.pad('date'), this.pad('credit'), this.pad('debit'), this.pad('balance')];
//   return columns.join('||');
// };
