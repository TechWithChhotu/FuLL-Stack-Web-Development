/*=======================
    Create a class called Person with two properties: name and age. The class should have a method called getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.
========================*/

class Person {
  constructor(name = "Unknown", age = "0") {
    (this.name = name), (this.age = age);
  }

  getDetails() {
    let details = `Name: ${this.name} Age:  ${this.age}`;
    return details;
  }
}
let personOne = new Person("Chhotu", 120);
let personTwo = new Person();
console.log(personOne.getDetails());
console.log(personTwo.getDetails());
