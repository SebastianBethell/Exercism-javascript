var Year = function (yearInput) {
  this.value = yearInput;
  return yearInput;
};

Year.prototype.isLeap = function () {
  let yearIn = this.value
  let checkLeapYear = ((yearIn % 100 === 0) ? (yearIn % 400 === 0) : (yearIn % 4 === 0));

  return checkLeapYear;
};




module.exports = Year;