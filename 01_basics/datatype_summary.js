//primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const Score = 100;
const ScoreValue = 100.3;

const isLoggedIn = Boolean
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

// console.log(typeof id);

const bigNumber = 329929n

// console.log(typeof bigNumber);

// Reference (non primitive)

// Array , Objects , Functions

const colors = ["red", "blue" , "yellow"]

let myObj = {
    name: "sahil",
    age : 19,
    dob : "19/11/2004"
};

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

// undefined => undefined
// null => Object
// string => string
// number => number
// object => object
// function => function


const fun = () => {
    console.log(2+2);
}
fun()
