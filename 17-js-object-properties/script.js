// An Object is an Unordered Collection of Properties
// Properties are the most important part of JavaScript objects.
// Properties can be changed, added, deleted, and some are read only.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Accessing Javascript Properties
// The syntax for accessing the propeerty of an objest is:

// objectName.property
console.log(person.age);

// objectName['property']
console.log(person['age']);

// objectName[expression]
let x = 'firstName';
console.log(person[x]);

// Adding New Properties
person.nationality = 'English';
console.log(person);

// Deleting Properties
// The delete keyword deletes a property form an object:
delete person.age;
console.log(person);

// Nested Objects
// Property values in an object can be other objects:
const myObj = {
    name:"John",
    age:30,
    myCars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
};

// Accessing nested objects:
console.log(myObj.myCars.car2);
console.log(myObj.myCars['car2']);
console.log(myObj['myCars']['car2']);

let p1 = 'myCars';
let p2 = 'car2';
console.log(myObj[p1][p2]);