//alert("hello world");
('use strict');
let addNumber = 0; 
const counterElement = document.getElementById("displayResult");
function increment () {
    
    addNumber++; 
    document.getElementById('add-increment');
    counterElement.textContent = `counter :${addNumber}`;
}
function decrement () {
    addNumber--;
    document.getElementById('sub-decrement');
    counterElement.textContent = `counter :${addNumber}`;
}

