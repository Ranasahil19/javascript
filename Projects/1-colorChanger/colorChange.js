const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    button.addEventListener('click' , function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }else{
            body.style.backgroundColor = 'white'
        }

        // switch (e.target.id) {
        //     case e.target.id:
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     default:
        //         break;
        // }
    })
})