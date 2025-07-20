// function are the block of code that can be reused and it is a first class citizen in javascript
// function can be passed as an argument to another function and it can return a function

/*
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
console.log(add(5, 3)); // 8
*/

// arrow function is a shorter syntax for writing functions in JavaScript

/*

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // 8

*/

// Function expressions are functions that are defined within an expression, often assigned to a variable

/*
const add = function(a, b) {
    return a + b;
};
const subtract = function(a, b) {
    return a - b;
};
const multiply = function(a, b) {
    return a * b;
};
console.log(add(5, 3)); // 8


*/


// best and complex example of the arrow function

/*
const calculate = (operation) => {
    return (a, b) => {
        switch (operation) {
            case 'add':
                return a + b;
            case 'subtract':
                return a - b;
            case 'multiply':
                return a * b;
            case 'divide':
                return a / b;
            default:
                throw new Error('Unknown operation');
        }
    };
}
// Usage
const add = calculate('add');
const subtract = calculate('subtract');
const multiply = calculate('multiply');
const divide = calculate('divide');
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

*/


