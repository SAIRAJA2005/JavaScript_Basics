/*

| Data Type     | Example                                   |
| ------------- | ----------------------------------------- |
| **String**    | `"Hello"`                                 |
| **Number**    | `42`, `3.14`                              |
| **Boolean**   | `true`, `false`                           |
| **Null**      | `null` (empty or intentionally nothing)   |
| **Undefined** | a variable declared but not given a value |
| **Symbol**    | unique values (rare in React)             |

*/

// Data Types in JavaScript
const stringExample = "Hello, World!";
const numberExample = 42;
const booleanExample = true;
const nullExample = null;
const undefinedExample = undefined;
const symbolExample = Symbol("unique");

// Displaying the data types
console.log("String Example:", stringExample);
console.log("Number Example:", numberExample);
console.log("Boolean Example:", booleanExample);
console.log("Null Example:", nullExample);
console.log("Undefined Example:", undefinedExample);
console.log("Symbol Example:", symbolExample);

// Checking the types
console.log("Type of stringExample:", typeof stringExample); // string
console.log("Type of numberExample:", typeof numberExample); // number
console.log("Type of booleanExample:", typeof booleanExample); // boolean
console.log("Type of nullExample:", typeof nullExample); // object (this is a known quirk in JavaScript)
console.log("Type of undefinedExample:", typeof undefinedExample); // undefined
console.log("Type of symbolExample:", typeof symbolExample); // symbol


