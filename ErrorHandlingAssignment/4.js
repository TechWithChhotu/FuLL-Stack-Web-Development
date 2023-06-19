/*=======================
    Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.
========================*/

class Employee {
  constructor(name, position, salary) {
    (this.name = name), (this.position = position), (this.salary = salary);
  }
  getSalary() {
    return this.salary;
  }
}

let firstEmp = new Employee("Chhotu", "SD-1", 100000);
console.log("First Emp salary: ", firstEmp.getSalary());

let secondEmp = new Employee("Sumit", "SD-2", 50000);
console.log("Second Emp Salary: ", secondEmp.getSalary());
