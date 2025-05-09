// JavaScript has 8 Datatypes:
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:

// Built-in object types can be:
// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

// Strings
let color = 'yellow';
let lastName = 'Hutauruk';

// Numbers
let length = 16;
let weight = 7.5;

// Booleans
let x = true;
let y = false;

// Object
const person = { firstName: 'John', lastName: 'Doe'};

// Array of object:
const cars = ['Saab', 'Volvo', 'BMW'];

// Date object:
const date = new Date('2022-03-25');

// Note
// A JavaScript variable can hold any type of data.

// To be able to operate on variables, it is important to know something about the type.

// Without data types, a computer cannot safely solve this:
// let a = 16 + "Volvo";
// JavaScript will treat the example above as:
// let a = "16" + "Volvo" --> "16Volvo"

// Note
// When adding a number and a string, JavaScript will treat the number as a string.
let a = 16 + "Volvo";   // evaluated as: "16Volvo"
let b = "Volvo" + 16;   // evaluated as: Volvo16
console.log(a);
console.log(b);

// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let c = 16 + 4 + "Volvo";    // evaluated as: "20Volvo"
console.log(c);

let d = "Volvo" + 16 + 4;   // evaluated as: "Volvo164"
console.log(d);

// JavaScript Types are Dynamic
// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let e;                      // Now e is undefined
e = 5;                      // Now e is a Number
e = 'John';                 // Now e is a String

// JavaScript Strings

// Strings are written with quotes. You can use single or double quotes:
// Using double quotes:
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quote inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quote:
let answer3 = 'He is called "Johnny"';

// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).

// Numbers can be written with, or without decimals:
// With decimals:
let x1 = 34.00;
console.log(x1);

// Without decimals:
let x2 = 34;
console.log(x2);

// Exponential Notation
// Extra large or extra small numbers can be written with scientific (exponential) notation:
let notation1 = 123e5;      // 12300000
let notation2 = 123e-5;     // 0.00123
console.log(notation1);
console.log(notation2);

// Note
// Most programming languages have many number types:

// Whole numbers (integers):
// byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

// Real numbers (floating-point):
// float (32-bit), double (64-bit).

// Javascript numbers are always one type:
// double (64-bit floating point).

// ========================================================================================

// JavaScript BigInt
// All JavaScript numbers are stored in a 64-bit floating-point format.

// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values 
// that are too big to be represented by a normal JavaScript Number.
let bigInteger = BigInt("123456789012345678901234567890");
console.log(bigInteger);

// JavaScript Booleans
// Booleans can only have two values: true or false.
let f = 5;
let g = 5;
let h = 6;
console.log(f == g);        // true
console.log(f == h);        // false

// JavaScript Arrays
// JavaScript arrays are written with square brackets.

// Array items are separated by commas.

// The following code declares (creates) an array called cars, containing three items (car names):
const names = ['Saab', 'Volvo', 'BMW'];
console.log(names);
// Array indexes are zero-based, which means the first item is [0], second is [1], and so on.
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// JavaScript Objects
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.
const user = {
    firstName: 'Samuel',
    lastName: 'Hutauruk',
    age: '27',
    eyeColor: 'black'
};

// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.

// The typeof operator returns the type of a variable or an expression:
console.log(typeof  "");            // Returns "string"
console.log(typeof "John");         // Returns "string"
console.log(typeof 0);              // Returns "number"
console.log(typeof 3.14);           // Returns "number"

// Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
let z;          
console.log(z);             
console.log(typeof z);

// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
let haha = "hahaha";
haha = undefined;

// Empty Values
// An empty value has nothing to do with undefined.

// An empty string has both a legal value and a type.
let hoho = '';          // The value is '', the typeof is "string"
console.log(hoho);
console.log(typeof hoho);
