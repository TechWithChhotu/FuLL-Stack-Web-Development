/*=======================
    Create a prototype object called Student with a property name. Add a method called printDetails to the prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the name "Chhotu" and call the printDetails method.
========================*/

function Student(name) {
    this.name = name;
}

Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
};

// Instantiate a Student object
const student = new Student("Chhotu");

// Call the printDetails method
student.printDetails(); // Output: Hello, my name is Chhotu
