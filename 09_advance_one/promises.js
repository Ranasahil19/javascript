const promiseOne = new Promise((resolve , reject) => {
    setTimeout(() =>{
        console.log("Async task is complete")
        resolve()
    },1000)
})

promiseOne.then(() => console.log("Promise consume"))

new Promise((resolve , reject)=> {
    setTimeout(() => {
        console.log("Async task two is complete")
        resolve()
    },1000)
}).then(() => console.log("Async two resolve"))

const promiseThree = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve({username : "sahil" , email:"sahil@example.com"})
    },1000)
})

promiseThree.then((data)=>{
    console.log(data)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"sahil", password : "123"})
        }else{
            reject('Error : something went wrong')
        }
    },2000);
})

promiseFour.then((data) => {
    console.log(data)
    return data.username
}).then((username) => {
    console.log(username)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Promise is either resolved or rejected")
})

const promiseFive = new Promise((resolve , reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"Javascript", password : "123"})
        }else{
            reject('Error : JS went wrong')
        }
    },2000);
})

async function consumePromiseFive(){
   try {
     const response = await promiseFive
     console.log(response)
   } catch (error) {
        console.log(error)
   }
}

consumePromiseFive()

// const getUser  = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
//


fetch('https://api.github.com/users/hiteshchoudhary')
.then((res) => {return res.json()})
.then((data) => console.log(data))
.catch((err) => console.log(err))

// getUser()