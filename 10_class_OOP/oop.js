const user = {
    username : "sahil",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log(`Username : ${this.username}`)
        // console.log(this)

    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

function User(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne =new User("sahil", 2,true)
const userTwo =new User("hitesh",11,false)

console.log(userOne)
console.log(userTwo)




