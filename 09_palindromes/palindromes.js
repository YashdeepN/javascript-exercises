const palindromes = function (str) {
  const strArr = toArray(str);
  return isPalindrom(strArr);
};

function isChar(char) {
  if (Number(char)) return true;
  const charCode = char.charCodeAt(0);
  if (charCode >= 97 && charCode < 123) return true;
  return false;
}

const toArray = function (str) {
  const strArr = str.toLowerCase().split("");
  const rtn = strArr.filter((elem) => isChar(elem));
  return rtn;
};

function isPalindrom(arr) {
  const arrLen = arr.length;
  const loopSize = Math.floor(arrLen / 2);
  for (let i = 0; i < loopSize; ++i) {
    if (arr[i] !== arr[arrLen - 1 - i]) {
      console.log(`${arr[i]} ${arr[arrLen - 1 - i]}`);
      return false;
    }
  }
  return true;
}

// Do not edit below this line
module.exports = palindromes;
