/*=======================
1. Type Conversion.
    Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number".Use error handling in javascript to achieve this output.
========================*/
convertToNumber = (stringNumber) => {
  try {
    if (isNaN(parseInt(stringNumber))) {
      throw new Error();
    }
    console.log("After Converted sting to number: ", parseInt(stringNumber));
  } catch {
    console.log("Invalid number");
  }
};

convertToNumber("22");
convertToNumber("36.5");
convertToNumber("Chh@otu");
