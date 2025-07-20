

/*

Template Literals

Destructuring

Spread & Rest Operators

Default Parameters

Short Object Syntax

*/


// Template Literals
// Template literals allow for multi-line strings and string interpolation, making it easier to create complex strings without needing to concatenate multiple parts together.

/*
const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); // Output: Hello, my name is John and I am 30 years old.

*/

// Destructuring
// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables, making code cleaner and more readable.

/*

a. Object Destructuring

    const person = {
        name: "Alice",
        age: 25,
        city: "Wonderland"
    };
    const {name,  age} = person;
    console.log(name); // Output: Alice
    console.log(age); // Output: 25

*/

/* b. Array Destructuring */

// Array destructuring allows you to unpack values from an array into distinct variables, making it easier to work with arrays.

/* 

let colors = ["red", "green"];
let [first, second] = colors;
console.log(first);  // red
console.log(second); // green

*/

/*


// 3. Spread Operator [...]

// a. Copy array:

let nums = [1, 2, 3];
let copy = [...nums]; // [1, 2, 3]


// b. Merge arrays:

let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b]; // [1, 2, 3, 4]

// c. Copy + update object:

let user = { name: "Raja", age: 22 };
let updated = { ...user, age: 23 };
console.log(updated); // { name: "Raja", age: 23 }


// 4. Rest Operator ...
// Used to collect the rest of the values.


function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6

// 5. Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!



*/

// mini Project

const user = { name: "Raja", age: 22, country: "India" };
const { name, country } = user;
console.log(`Hello, ${name} from ${country}`); // ?

const updatedUser = { ...user, age: 23 };
console.log(updatedUser); // ?

const add = (...nums) => nums.reduce((a, b) => a + b);
// how reduce works
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The first argument to the reducer function is the accumulator (a), which accumulates the result, and the second argument is the current value (b) being processed in the array.

console.log(add(1, 2, 3)); // ?
