const User = {
    _email : 'sahil@gmail.com',
    _password : 'sahil123',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email)