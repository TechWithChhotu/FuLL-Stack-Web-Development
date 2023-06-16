/*=======================
2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to
remove all the duplicatesfrom the array. You want to write a function that can
accomplish this task efficiently and returns a new set that contains only the unique elements.
========================*/

let myArray = [1, 2, 3, 4, 2, 6, 5, 4, 3, 4, 8, 7, 9];
function removeDuplicates(arr) {
  let setOne = new Set(myArray);
  return setOne;
}

console.log("unique elements set: ", removeDuplicates(myArray));
console.log("unique elements of array: ", [...removeDuplicates(myArray)]);
