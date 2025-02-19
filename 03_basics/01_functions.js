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

function  calculateCartPrice(val1 , val2 , ...num1){
    return num1
}

console.log(calculateCartPrice(200 , 400 , 500));

const user = {
    username : "sahil",
    price : 90
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} price is ${anyObject.price}`);   
}

// handleObject(user);
handleObject({
    username : 'sam',
    price : 90
});

const myNewArray = [200 , 300, 400]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue([200 , 300, 400]))
