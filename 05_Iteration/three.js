//for of

const arr = [1,2,3,4]

for (const element of arr) {
    // console.log(element);
    
}

const greeting = "hello world!"
for (const greet of greeting) {
    if(greet == " "){
        continue;
    }
        // console.log(greet);
    
}
//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', 'France')
map.set('IN', "India")

// console.log(map);

for (const [key, values] of map) {
    console.log(key,':',values);
    
}

const myObject = {
    '1':"freefire",
    '2':"pubg"
}

for (const [game, values] of myObject) {
    console.log(game , values);
}