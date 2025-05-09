// Object Constructor Functions
/*
    Sometimes we need to create many objects of the same type.
    To create an object type we use an object constructor function.
    It is considered good practice to name constructor functions with an upper-case first letter.
*/
function Person(firstName, lastName, age, eye) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eye = eye;
}

const john = new Person('John', 'Doe', 50, 'blue');
const sally = new Person('Sally', 'Rally', 48, 'green');
const anna = new Person('Anna', 'Sentina', 18, 'green');
const hoda = new Person('Honda', 'Hoda', 22, 'green');

// Property Default Values
// A value given to a property will be a default value for all objects created by the constructor:
function Car(model, color) {
    this.model = model;
    this.color = color;
    this.origin = 'Japan';
}

// Adding a property to an Object
const camry = new Car('Toyota Camry', 'silver');
camry.transmission = 'manual';

// Adding a Property to a Constructor
Person.prototype.nationality = 'English';

// Constructor Function Methods
function Employee(firstName, lastName, age, dept) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dept = dept;
    
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

const sam = new Employee('samuel', 'hutauruk', 27, 'IT');

// Adding a Method to an Object
sam.changeDept = function(deptName) {
    this.dept = deptName;
}
sam.changeDept('HR');

// Adding a Method to a Constructor
Employee.prototype.changeAge = function (newAge) {
    this.age = newAge;
}

sam.changeAge(17);


// Buuilt-in Javascript Constructors
/*
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object

Use object literals {} instead of new Object().
Use array literals [] instead of new Array().
Use pattern literals /()/ instead of new RegExp().
Use function expressions () {} instead of new Function().

// Example:

"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object
function(){}; // function

*/