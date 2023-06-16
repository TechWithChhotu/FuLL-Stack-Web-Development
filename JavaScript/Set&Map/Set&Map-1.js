/*=======================
* Set and Map are two built-in data structures in JavaScript that provide
  efficient ways to store and manipulate collections of data. 
========================*/

/*=======================
Set:
  A Set is an unordered collection of unique elements. It can store any type of value,
  whether it's primitive data types or object references. The key features of a Set are:

  Unique Values: A Set cannot contain duplicate values. If you try to add 
  an element that already exists in the Set, it will be ignored.

 No Indexing: Unlike arrays, Sets do not provide indexing to access elements.
 Instead, you can iterate over the Set using iteration methods like forEach 
 or convert it to an array using Array.from or the spread operator ([...set]).

 Operations: Sets offer methods like add to add elements, delete to remove elements,
 has to check if an element exists, and size to get the number of elements in the Set 
 and many more methods.
========================*/

let myArray = [1, 2, 3, 4, 2, 4, 6];
let setOne = new Set(myArray);
setOne.add(3);

console.log(setOne);

console.log("Key of setOne: ");
setOne.forEach((setElements) => console.log(setElements));

setOne.delete(3);
console.log("\nAfter removed 3: ", setOne);

setOne.add(3);
console.log("After add 3: ", setOne);

console.log("\nAfter performing has(9) op:", setOne.has(9));
console.log("After performing has(6) op:", setOne.has(6));

// key and value are the same here
for (const [key, value] of setOne.entries()) {
  console.log("Key: ", +key, ", value: " + value);
}

console.log("\nAfter performing size Op.: ", setOne.size);
setOne.clear();
console.log("After performing clear Op.: ", setOne);

// Challenge: convert Set into Array
console.log("\n-------------------------\nChallenge1: convert Set into Array");
let setTwo = new Set(myArray);
console.log(setTwo);

let newArray = Array.from(setTwo);
console.log(newArray);

// for (let i = 0; newArray[i]; i++) {
//   console.log(newArray[i]);
// }

// Challenge: find unique value of two sets.
console.log("\n-------------------\nChallenge2: find unique value of two sets");
let setThree = new Set(myArray);
setThree.add(8);
setThree.add(11);

uniqueVaue = (setOne, setTwo) => {
  return [...setTwo].filter((elementOfsetTwo) => !setOne.has(elementOfsetTwo));
};

console.log(uniqueVaue(setTwo, setThree));
