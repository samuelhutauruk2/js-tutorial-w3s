// Javascript String Length
// The length property returns the length of a string
let text = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
let textLength = text.length;
console.log(text + " : " + textLength);

/* Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/

text = "HELLO WORLD";
let char;

// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:
char = text.charAt(0);
console.log(text + " : " + char);

// JavaScript String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
char = text.charCodeAt(0);
console.log(text + " : " + char);

// JavaScript String at()
// Get the third letter of text
let letter = text.at(2);
console.log(text + " : " + letter);

// JavaScript Property Access []
// Get the third letter of text
letter = text[2];
console.log(text + " : " + letter);


// Extracting String Parts

// JavaScript String slice()
text = 'apple, banana, kiwi';
let part = text.slice(7, 13);
console.log(part);
// If you omit the second parameter, the method will slice out the rest of the string:
part = text.slice(7);
console.log(part);
// If a parameter is negative, the position is counted from the end of the string:
part = text.slice(-12);
console.log(part);
// This example slices out a portion of a string from position -12 to position -6:
part = text.slice(-12, -6);
console.log(part);

// JavaScript String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
part = text.substring(7, 13);
console.log(part);

// Converting to Upper and Lower Case

// A string is converted to upper case with toUpperCase():
text = 'Hello World!'
let text2 = text.toUpperCase();
console.log(text2);

// A string is converted to lower case with toLowerCase():
text2 = text.toLocaleLowerCase();
console.log(text2);

// JavaScript String concat()
// concat() joins two or more strings:
text1 = 'Hello ';
text2 = 'Concat';
let textConcated = text1.concat(text2);
console.log(textConcated);

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:
text1 = '    Hello Trim!   ';
text2 = text1.trim();
console.log("trim: " + text2);

// JavaScript String trimStart()
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
text2 = text1.trimStart();
console.log("trimStart: " + text2);

// JavaScript String trimEnd()
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
text2 = text1.trimEnd();
console.log("trimEnd: " + text2);

// JavaScript String Padding

// JavaScript String padStart()
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
text = "5";
let padded = text.padStart(4, "0");
console.log(padded);

// The padStart() method is a string method.
// To pad a number, convert the number to a string first.
let num = 5;
text = num.toString();
padded = text.padStart(4, "0");
console.log(padded)

// JavaScript String padEnd()
// The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.
text = "5";
padded = text.padEnd(4, "0");
console.log(padded);


// The padEnd() method is a string method.
// To pad a number, convert the number to a string first.
num = 5;
text = num.toString();
padded = text.padEnd(4, "0");
console.log(padded);

// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.
text = 'Hello World ';
let result = text.repeat(4);
console.log(result);

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
text = "Please visit Microsoft!";
result = text.replace("Microsoft", "W3Schools");
console.log(result);
// By default, the replace() method is case sensitive.
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
result = text.replace(/MICROSOFT/i, "W3Schools");
console.log(result);
// Note
// Regular expressions are written without quotes.
// To replace all matches, use a regular expression with a /g flag (global match):
result = text.replace(/Microsoft/g, "W3Schools");
console.log(result);

// JavaScript String ReplaceAll()
// text = text.replaceAll("Cats", "Dogs");
// console.log(text);

// Converting a String to an Array
// JavaScript String split()
// A string can be converted to an array with the split() method:
text = "Lorem ipsum dolor sit amet";
// Split on spaces
result = text.split(" ");       
console.log(result);
// Split on commas
text = "Lorem,ipsum,dolor,sit,amet";
result = text.split(",");
console.log(result)
// Split on pipe
text = "Lorem|ipsum|dolor|sit|amet";
result = text.split("|");
console.log(result);