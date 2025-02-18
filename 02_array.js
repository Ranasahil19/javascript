const marvel_heros = ["thor" , "Ironman" , "spiderman"];
const dc_heros = ["superman", "flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][0]);

// const newArr = marvel_heros.concat(dc_heros)
// console.log(newArr);

const spreadArray = [...marvel_heros, ...dc_heros]
console.log(spreadArray);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);

console.log(Array.isArray("Sahil"))
console.log(Array.from("Sahil"))
console.log(Array.from({name : "Sahil"}))  //imp

let score1=100
let score2=200
let score3=400
console.log(Array.of(score1, score2 , score3));


