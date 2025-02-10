const reverseString = function (str) {
  const strArr = str.split("");
  const newStrArr = [];
  const ARRAY_LENGTH = strArr.length;
  for (let i = 0; i < ARRAY_LENGTH; ++i) {
    newStrArr[i] = strArr[ARRAY_LENGTH - 1 - i];
  }
  return newStrArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
