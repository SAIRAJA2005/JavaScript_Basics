// Loops in JavaScript

// for 

/*
for(let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
*/

// for each loop

/*
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
    console.log(`Fruits at the index -> ${index }: ${fruits}`);
});
*/

// map() is used to transform arrays. It creates a new array based on the old one.

// explain map form basics

/*
let nums = [1, 2, 3];
let squares = nums.map(n => n * n);
console.log(squares); // [1, 4, 9]
*/


// filter() is used to create a new array with elements that pass a test. It filters the original array based on a condition.

/*
let marks = [90, 60, 40, 80];
let passed = marks.filter(mark => mark >= 60);
console.log(passed); // [90, 60, 80]
*/


// reduce() is used to reduce an array to a single value by applying a function to each element in the array. It can be used for summing numbers, concatenating strings, etc.
/*
let nums = [10, 20, 30];

let total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 60

*/

// find is used to find the first element in an array that satisfies a condition. It returns the value of the first element that passes the test, or undefined if no elements pass.

/*
let users = [
    { name: "Raja", age: 22 },
    { name: "Sai", age: 20 },
    { name: "John", age: 25 },
    { name: "Jane", age: 20 }
  ];
  
  let result = users.find(user => user.age === 20);
  console.log(result); // { name: "Sai", age: 20 }
  */


  // Mini Project

let numbers = [5, 10, 15, 20];

// map: double each
let doubled = numbers.map(n => n * 2);

// filter: values > 10
let big = numbers.filter(n => n > 10);

// find: first value > 10
let firstBig = numbers.find(n => n > 10);

// reduce: sum all
let sum = numbers.reduce((a, b) => a + b, 0);

console.log(doubled);  // ?
console.log(big);      // ?
console.log(firstBig); // ?
console.log(sum);      // ?

// Output:
// [10, 20, 30, 40]
// [15, 20]
// 15
// 70
