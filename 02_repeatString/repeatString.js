const repeatString = function (str, num) {
  if (num < 0) return "ERROR";
  if (num === 0) return "";
  const newStr = str;
  for (let i = 0; i < num - 1; ++i) {
    str += newStr;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
