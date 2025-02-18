// signleton

//object literals
//Object.create 
const mysym = Symbol("key1");

const JsUser = {
    name : "Sahil",
    "full Name": "sahil rana",
    [mysym]: "mykey1",
    age: 20,
    location: 'Surat',
    email : 'sahil@gmail.com',
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser["full Name"]);
// console.log(JsUser["email"]);
// console.log( JsUser[mysym]);

JsUser.email = "Sahilsr@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Sahilsr@google.com"
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function (){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

