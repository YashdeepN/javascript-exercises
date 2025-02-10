const removeFromArray = function (arr, ...args) {
  const ARGS_LENGTH = args.length;
  for (let i = 0; i < ARGS_LENGTH; ++i) {
    arr = removeSingleElementFromArray(arr, args[i]);
  }
  return arr;
};

function removeSingleElementFromArray(arr, element) {
  const newArr = [];
  const ARR_LENGTH = arr.length;
  for (let i = 0; i < ARR_LENGTH; ++i) {
    if (arr[i] !== element) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
// console.log(removeSingleElementFromArray([2, 1, 2, 2, 2, 3, 2], 2));
