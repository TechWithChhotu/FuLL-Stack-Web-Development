// 01. Count the occurrences.
/*=======================
    You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.
========================*/

let coutOccurrences = (myString) => {
  let myMap = new Map();
  const words = myString.split(" ");

  for (const word of words) {
    if (myMap.has(word)) {
      myMap.set(word, myMap.get(word) + 1);
    } else {
      myMap.set(word, 1);
    }
  }
  return myMap;
};

let myString =
  "I am xyz. I am learning web development from PW Skills Skills I";
console.log(coutOccurrences(myString));
