// let -> we can resassign and it is block scoped


/* let name = "Raja";
console.log(name); // Raja

name = "sai";
console.log(name); // sai */


// const -> we cannot reassign and it is block scoped

/*
const name = "Raja";
console.log(name); // Raja

name = "sai"; // TypeError: Assignment to constant variable.
console.log(name); // Raja

*/

// var -> we can reassign and redeclare and it is a function scoped

/*
function great(){
    if(true){
        var name = "Raja";
    }
    // here the name var is works out side the if block but it doesnt work at outside of the function
    // so it is works as a function block
    console.log(name); // Raja 
}

great();
*/

/* 

Task:

let age = 20;
age = 21;
console.log(age); ? // 21

const age = 20;
age = 21;
console.log(age); ? // TypeError:Assignment to constant variable.



const pi = 3.14;
// pi = 3.14159; // What happens if you uncomment this?
// if we uncomment this line, it will throw an error because we cannot reassign a constant variable
console.log(pi);

*/






