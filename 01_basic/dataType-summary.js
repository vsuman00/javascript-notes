// ****************  TYPES OF DATATYPES ********************


// 1. Primitive DataType => 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false (here id & anotherId is not same)

const bigNumber = 3456543576654356754n

// Print the Type of above variable
console.log(typeof score); //number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); //object
console.log(typeof userEmail); //undefined
console.log(typeof id); // symbols
console.log(typeof anotherId); // symbols
console.log(typeof bigNumber); // BigInt

// 2. Reference (Non primitive) DataTypes => 3 types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array

//object
let myObj = {
    name: "hitesh",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros); // Object
console.log(typeof myObj); // Object
console.log(typeof myFunction); // Functuon (object function)



// ******* Read Documtation of datatype => https://262.ecma-international.org/5.1/#sec-11.4.3 ***************