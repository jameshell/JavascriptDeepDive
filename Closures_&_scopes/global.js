// Variables
// Declaring a variable
var a;

// Declaring a variable and assigning a value
var b = 'b';

// Reassigning a value
b = 'bbb';

// Re-declaring a variable
var a = 'aa'

// Global Scope
var fruit = 'apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // This is being declared globally implicitly.
    console.log(country);
}

countries();
console.log(country);