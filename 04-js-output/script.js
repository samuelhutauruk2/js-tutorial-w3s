// Writing into an HTML element, using innerHTML or innerText.
// Use innerHTML when you want to change an HTML element.
document.getElementById('demo').innerHTML = '<h2>Hello World</h2>'
// Use innerText when you only want to change the plain text.
document.getElementById('demo2').innerText = 'Hello World'

// Writing into the HTML output using document.write().
// For testing purposes, it is convenient to use document.write():
document.write(5 + 6);

// Writing into an alert box, using window.alert().
window.alert(5 + 6);

// Writing into the browser console, using console.log().
// For debugging purposes, you can call the console.log() method in the browser to display data.
console.log(5 + 6);