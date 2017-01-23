function StatementPresentation() {};

StatementPresentation.prototype.formatDate = function(date) {
  day = '' + date.getDate(),
  month = '' + (date.getMonth() + 1),
  year = date.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [day, month, year].join('/');
};

StatementPresentation.prototype.pad = function(string) {
  padding = '           '
  if (string === null) {
    return padding;
  } else {
    return (padding + string).slice(-padding.length);
  }
};