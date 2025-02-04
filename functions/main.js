// Functions
// function declarartion

// function square(num) {
//     return num * num;
// }
// console.log(square(5));
// console.log(square(10));

// Expression function

// const square = function (num) {
//     return num * num;
// }
// console.log(square(3));
// console.log(square(9));

// arrow function

// const square = (num) =>  { return num * num};// long form.
// const square = num =>  num * num; // short form but if the parameter is more than one you have to write the ().
// console.log(square(4));
// console.log(square(6));

// function that adds two numbers by arrow method.
// const add = (a, b) => a + b;
// console.log(add(5, 8));

//function that adds two numbers by old method.
function add(a, b) {
    return a + b;
}
console.log(add(8, 7));
console.log(add(8, 9));

// function that prints your name
const name = (name) => console.log(`Your name is ${name}`);
console.log(name("Maxamed"));
console.log(name("Axmed"));
console.log(name(12));
