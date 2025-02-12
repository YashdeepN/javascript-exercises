const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = arr.reduce((total, elem) => elem + total, 0);
  return sum;
};

const multiply = function (arr) {
  let product = arr.reduce((acc, elem) => elem * acc, 1);
  return product;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) return 1;
  return factorial(num - 1) * num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
