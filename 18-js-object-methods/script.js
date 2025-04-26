// Javascript Object Methods
// Object methods are actions that can be performed on objects.
// A method is a function definition stored as a property value.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
// In the example above, this refers to the person object:
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person.

// Accessing Object Methods
// objectName.methodName()
console.log(person.fullName());

// Adding a Method to an Object
person.name = function() {
    return this.firstName + " " + this.lastName;
}