var Year = function (yearInput) {
  this.value = yearInput;
  return yearInput;
};

Year.prototype.isLeap = function () {
  if (this.value % 4 == 0) {
    if (this.value % 100 == 0) {
      if (this.value % 400 == 0) {
        return true;
      }
        return false;
    }
    return true;
  }
  return false;
};


module.exports = Year;