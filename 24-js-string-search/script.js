// JavaScript String Search

// JavaScript String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, 
// or it returns -1 if the string is not found:
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index);

// JavaScript String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
index = text.lastIndexOf("locate");
console.log(index);
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
index = text.lastIndexOf("begu");
console.log(index);

// Both methods accept a second parameter as the starting position for the search:
index = text.indexOf('locate', 15);
console.log(index);

// The lastIndexOf() methods searches backwards (from the end to the beginning), 
// meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
index = text.lastIndexOf('locate', 15);
console.log(index);

// JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
index = text.search('locate');
console.log(index);
// Using regular expression:
index = text.search(/locate/);
console.log(index);
/*
    Note:
    The search() method cannot take a second start position argument.
    The indexOf() method cannot take powerful search values (regular expressions).
*/

// JavaScript String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
text = 'The rain in SPAIN stays mainly in the plain';
let match = text.match('ain');
console.log(match);
// Perform a search for "ain" with Regular Expression:
match = text.match(/ain/);
console.log(match);
// Perform a global search  for "ain" with Regular Expression:
match = text.match(/ain/g);
console.log(match);
// Perform a global, case-insensitive search for "ain" with Regular Expression:
match = text.match(/ain/gi);
console.log(match);

// JavaScript String matchAll()
// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
text = "I love cats. Cats are very easy to love. Cats are very popular.";
let iterator = text.matchAll("Cats");
let arr = Array.from(iterator);
console.log(arr);
// If the parameter is a regular expression, the global flag (g) must be set
iterator = text.matchAll(/Cats/g);
arr = Array.from(iterator);
console.log(arr);
// If you want to search case insensitive, the insensitive flag (i) must be set:
iterator = text.matchAll(/Cats/gi);
arr = Array.from(iterator);
console.log(arr);

// JavaScript String includes()
// The includes() method returns true if a string contains a specified value.
// Otherwise it returns false.
// Check if a string includes "world":
text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);
// Check if a string includes "world". Start at position 12:
result = text.includes("world", 12);
console.log(result);

// JavaScript String startsWith()
// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:
result = text.startsWith("Hello");      // Returns true
console.log(result);
result = text.startsWith("universe");   // Returns false
console.log(result);
// A start position for the search can be specified:
result = text.startsWith("world", 5);   // Returns false
console.log(result);                    
result = text.startsWith("world", 6);   // Returns true
console.log(result);                    

// JavaScript String endsWith()
// The endsWith() method returns true if a string ends with a specified value.
// Otherwise it returns false:
text = 'John Doe';
result = text.endsWith('Doe');
console.log(result)                     // Returns true
// Check if the 11 first characters of a string ends with "world":
result = text.endsWith("world", 11);
console.log(result);                    // Returns false
