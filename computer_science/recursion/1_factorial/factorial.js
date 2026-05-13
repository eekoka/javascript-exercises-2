const factorial = function(x) {
  if (typeof x !== 'number' || x < 0 || !Number.isInteger(x)) {
    return undefined;
  }

  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

// Do not edit below this line
module.exports = factorial;