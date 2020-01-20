function rndFloatNumberByRange(start, end) {
  return Math.random() * (end - start) + start;
}

function rndIntNumberByRange(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

function rndBoolean() {
  return Math.random() >= 0.5;
}
function rndTenDigitNumber() {
  return rndIntNumberByRange(1000000000, 9999999999);
}
module.exports = {
  rndBoolean,
  rndIntNumberByRange,
  rndFloatNumberByRange,
  rndTenDigitNumber,
};
