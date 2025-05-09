// JavaScript comments can be used to explain JavaScript code, and to make it more readable.
// JavaScript comments can also be used to prevent execution, when testing alternative code.

// Single line comments start with //.
// Any text between // and the end of the line will be ignored by JavaScript (will not be executed).
// This example uses a single-line comment before each code line:

// Change heading:
document.getElementById('myH').innerHTML = 'My First page';

// Change paragraph:
document.getElementById('myP').innerHTML = 'My first paragraph';

// This example uses a single line comment at the end of each line to explain the code:
let x = 5;          // Declare x, give it the value of 5
let y = x + 2;      // Declare y, give it the value of x + 2
console.log(y);     // Print the value of y to console

// Multi-line Comments
// Multi-line comments start with /* and end with */.

// Any text between /* and */ will be ignored by JavaScript.

// This example uses a multi-line comment (a comment block) to explain the code:
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";

// Using Comments to Prevent Execution
// Using comments to prevent execution of code is suitable for code testing.

// Adding // in front of a code line changes the code lines from an executable line to a comment.

// This example uses // to prevent execution of one of the code lines:

//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";

// This example uses a comment block to prevent execution of multiple lines:

/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/
