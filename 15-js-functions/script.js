// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// Function is called, the return value will end up in x
let x = getProduct(4, 3);
console.log(x);

function getProduct(a, b) {
    return 4 * 3;
}

// Why Functions?
// With functions you can reuse code
// You can write code that can be used many times.
// You can use the same code with different arguments, to produce different results.

// The () Operator
// The () operator invokes (calls) the function:
function toCelcius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
// Invoke function with () operator:
let value = toCelcius(77);
console.log(value);

// Accessing a function without () returns the function and not the function result:
value = toCelcius;
console.log(value);

// Local Variables
// Variables declared within a JavaScript function, become LOCAL to the function.

// Local variables can only be accessed from within the function.

// code here can NOT user carName
console.log(carName);           // error, carName is not defined

function myFunction() {
    let carName = 'Volvo';
    // code here CAN use carName
    console.log(carName);
}

// code here can NOT carName
console.log(carName);           // error, carName is not defined
