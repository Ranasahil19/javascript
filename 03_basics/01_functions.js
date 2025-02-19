function sayMyName(){
    console.log("S");
console.log("A");
console.log("H");
console.log("I");
console.log("L");

}
// sayMyName()

// function addTwoNumber(a, b) {
//     console.log(a + b);
// }
// function addTwoNumber(a, b) {
//     result = a + b;
//     return result
// }

function addTwoNumber(a, b) {
    // console.log("Sahil");
    
    return a + b
    //console.log("Sahil");

}
const result = addTwoNumber(1, 5)
// console.log("Results :",result);

function loginUserMessage(username = "sam"){
    if(!username){
    console.log("please enter a username");
    return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("sahil"))
console.log(loginUserMessage())

