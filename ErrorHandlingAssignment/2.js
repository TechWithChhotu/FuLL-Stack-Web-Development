/*=======================
    Create a function called getPerson that takes an object as a parameter representing a person's name and age.The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs.
========================*/

getPerson = function (Obj) {
  let person;
  try {
    if (isNaN(parseInt(Obj.name)) && typeof Obj.age === "number") {
      person = "name: " + Obj.name;
      person += " age: " + Obj.age;
      return person;
    } else {
      throw new Error();
    }
  } catch {
    console.log("Invalid parameter type");
  }
};

let personObj = {
  name: "chhotu",
  age: 18,
};

console.log(getPerson(personObj));
console.log(getPerson({ name: "123", age: 12 }));
console.log(getPerson({ name: "Chhotu", age: "Kumar" }));
console.log(getPerson({ name: "123", age: "chhotu" }));
