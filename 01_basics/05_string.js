const name = "sahil";
const repoCount = 4;

// console.log(name +" " + repoCount + " Value");

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String("Sahil-SR")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.indexOf('_'));

// const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);

const newStringOne = "   sahil"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sahil.com/sahil%20rana"
console.log(url.replace('%20',''));

console.log(url.includes('sahil'))

console.log(gameName.split('-'));



