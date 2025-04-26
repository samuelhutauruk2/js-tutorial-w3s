// Strings are for storing text
// Strings are written with single quote or double quotes

// A JavaScript string is zero or more characters written inside quotes.
let firstName = "John";
let lastName = 'Doe';
console.log(firstName);
console.log(lastName);

// Quotes Inside Quotes
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer1);
console.log(answer2);
console.log(answer3);

// Template Strings
// Templates are strings enclosed in backticks (`This is a template string`).
// Templates allow single and double quotes inside a string:
let answer4 = `He's often called "Johnny"`;

// String Length
// To find the length of a string, use the built-in length property:
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let textLength = alphabet.length;
console.log(`${alphabet} length is: ${textLength}`);

/* Escape Characters

Because strings must be written within quotes, JavaScript will misunderstand this string:
let text = "We are the so-called "Vikings" from the north.";
The string will be chopped to "We are the so-called ".

To solve this problem, you can use an backslash escape character.
The backslash escape character (\) turns special characters into string characters:

Code    Result      Description
\'	    '	        Single quote
\"	    "	        Double quote
\\	    \	        Backslash
*/

// Examples:
let text1 = "We are so-called \"Vikings\" from the north.";
let text2 = 'It\'s alright';
let text3 = "The character \\ is called backslash";

console.log(text1);
console.log(text2);
console.log(text3);

/* Six other escape sequences are valid in JavaScript:
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/

