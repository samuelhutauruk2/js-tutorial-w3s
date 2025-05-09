// Real Life Objects
// In real life, objects are things like: houses, cars, people, animals, or any other subjects.

// JavaScript Objects
// Objects are variables too. But objects can contain many values.

// This code assigns many values (Fiat, 500, white) to an object named car:
const car = {
    type: 'Fiat',
    model: '500',
    color: 'white'
};

// JavaScript Object Definition
// How to Define a JavaScript Object:
// 1. Using an Object Literal
// 2. Using the new Keyword
// 3. Using an Object Constructor

// Javascript Object Literal
// An object literal is a list of name:value pairs inside curly braces {}.
// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

// Note:
// name:value pairs are also called key:value pairs.
// object literals are also called object initializers.

// Creating a JavaScript Object
// These examples create a JavaScript object with 4 properties:
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50,
//     eyeColor: 'blue'
// };

// This example creates an empty JavaScript object, and then adds 4 properties:

// Create an object:
// const person = {};

// // Add Properties:
// person.firstName = 'John';
// person.lastName = 'Doe';
// person.age = 50;
// person.eyeColor = 'blue';

// Using the new Keyword
// This example create a new JavaScript object using new Object(), and then adds 4 properties:

// Create an object
// const person = new Object();

// Add Properties
// person.firstName = 'John';
// person.lastName = 'Doe';
// person.age = 50;
// person.eyeColor = 'blue';

// Note:
// The examples above do exactly the same.
// But, there is no need to use new Object().
// For readability, simplicity and execution speed, use the object literal method.

// Accessing Object Properties
// You can access object properties in two ways:
// objectName.propertyName
// objectName['propertyName']

// person.lastName;
// person['lastName'];


// JavaScript Object Methods
// Methods are actions that can be performed on objects.
// Methods are function definitions stored as property values.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}
// In the example above, this refers to the person object:
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person.

