/*
Arrays are a special type of object in JavaScript that allow you to store multiple values in a single variable.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // apple, banana, cherry
}
;

*/

// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
let person = {
    name: "John",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "gaming", "hiking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

console.log(person.address.city);  

