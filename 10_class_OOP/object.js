function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}
      
const sahil = new createUser("sahil",200)
const raj = new createUser("raj",250)

sahil.printMe()
raj.printMe()

