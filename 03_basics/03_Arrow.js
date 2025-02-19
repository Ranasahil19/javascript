const user = {
    username : "hitesh",
    price : 99,

    welcomeMessage : function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
// console.log(this);

// function freefire(){
//     let username = "sahil"
//     console.log(this.username);
    
// }
// freefire()

// const chai = function() {
//     let username = "sahil"
//      console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "sahil"
//      console.log(this);
// }
// chai()

// const addTwo = ( num1 , num2) => {
//     return num1 + num2
// }


// const addTwo = ( num1 , num2) => num1 + num2
// const addTwo = ( num1 , num2) => (num1 + num2)

const addTwo = ( num1 , num2) => ({username: "sahil"})

console.log(addTwo(3,4));

const myArray = [1,2,3,4,5]

// myArray.forEach(function() {})
// myArray.forEach(() => ())

    