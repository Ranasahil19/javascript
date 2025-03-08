// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

// Object.defineProperty(Math , "PI" , {
//     writable : true,
//     enumerable : true
// })
// // console.log(Math.PI)
// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// globalThis.Math = { ...Math , PI : 5}
console.log(Math.PI)
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)
const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable: true,

    orderChai : function(){
        console.log('chai error')
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'))

Object.defineProperty(chai , 'name' , {
    enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'))

for (let [key , value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    // console.log(`${key}:${value}`)
    }
}
