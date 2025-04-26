// How to Display JavaScript Objects?
// Displaying a JavaScript object will output [object Object].
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Displayed as: [object Object]
document.getElementById('disp1').innerHTML = person;

// Displaying Object Properties
// The properties of an object can be displayed as a string:
document.getElementById('disp2').innerHTML = person.name + "," + person.age + "," + person.city;

// Displaying Properties in a Loop
// The properties of an object can be collected in a loop
let text = '';
for (let x in person) {
    text += person[x] + " ";
};
document.getElementById('disp3').innerHTML = text;

// Using Object.values()
// Object.values() creates an array from the property values:
const arr = Object.values(person);
document.getElementById('disp4').innerHTML = arr;

// Using Object.entries()
// Object.entries makes it simple to use objects in loops:
const fruits = {Bananas:300, Oranges:200, Apples:500};
text = '';
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + "<br>";
};
document.getElementById('disp5').innerHTML = text;

// Using JSON.stringify()
// Javascript objects can be converted to a string with JSON method JSON.stringifiy()
text = JSON.stringify(person);
document.getElementById('disp6').innerHTML = text;