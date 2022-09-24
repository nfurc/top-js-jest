const ftoc = function(fahrenheit) {
  // formula C = (F - 32) x 5/9
  return Math.round((fahrenheit - 32) * (5/9) *10) / 10;
};

const ctof = function(celsius) {
  // formula F = C x 9/5 + 32
  return Math.round(((celsius * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
