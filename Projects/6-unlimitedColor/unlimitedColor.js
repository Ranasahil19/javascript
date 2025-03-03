const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

console.log(randomColor());

let intervarId;

const startChangingColor = function(){
    if(!intervarId){
        intervarId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
}

const stopChangingColor = function(){
    clearInterval(intervarId)
    intervarId = null
}

document.querySelector('#start').addEventListener('click' , startChangingColor)
document.querySelector('#stop').addEventListener('click' , stopChangingColor)
