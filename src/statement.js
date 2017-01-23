// responsible for: keeping track of all transactions
function Statement() {
  this._transactionHistory = [];
};

// Statement.prototype.pad = function(string) {
//   padLeft = true;
//   padding = '           '
//   if (typeof string === 'undefined')
//   return padding;
//   if (padLeft) {
//     return (padding + string).slice(-padding.length);
//   } else {
//     return (string + padding).substring(0, padding.length);
//   }
// };
//
// Statement.prototype.firstLine = function() {
//   var columns = [this.pad('date'), this.pad('credit'), this.pad('debit'), this.pad('balance')];
//   return columns.join('||');
// };
