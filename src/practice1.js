var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.greet = function () {
        return "Hello, My name is ".concat(this.name, " and I am ").concat(this.age, " years old!");
    };
    return Employee;
}());
var employee1 = new Employee("Anurag", 50);
var employee2 = new Employee("Amit", 45);
console.log(employee1.greet());
console.log(employee2.greet());
var person1 = {
    name: "Dummy",
    age: 40,
    greet: function () {
        return "Hi, My name is ".concat(this.name, " and I am ").concat(this.age, " years old!");
    }
};
console.log(person1.greet());
