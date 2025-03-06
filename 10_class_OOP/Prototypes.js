// let myName = "sahil    "

// console.log(myName.truelength)

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.sahil = function(){
    // console.log("sahil is present in all object")
}

// heroPower.sahil()

Array.prototype.heySahil = function(){
    // console.log('sahil say hero')
}

// heroPower.heySahil()
myHero.sahil()

//inheritance
const user = {
    name : 'chai',
    email : 'chai@google.com'
}
const teacher = {
    makeVideo : true 
}
const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ :TeachingSupport
}

teacher.__proto__ = user 

//morden

Object.setPrototypeOf(TeachingSupport, teacher)


let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"Hitesh  ".trueLength()
"sahil".trueLength()