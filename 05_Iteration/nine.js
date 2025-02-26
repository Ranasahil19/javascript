const myNum = [1,2,3,4,5]

const myTotal = myNum.reduce(function (acc , currentVal){
    console.log(`acc : ${acc}, curVal : ${currentVal}`)
    
    return acc + currentVal
}, 0)
console.log(myTotal);
