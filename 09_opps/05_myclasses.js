// ES 6

class user {
    constructor(name, email, pass) {
        this.name = name
        this.email = email
        this.pass = pass
    }

    encrptPass() {
        console.log(`${this.pass}abc`);
    }
    usernameUppercase() {
        console.log(`${this.name.toUpperCase()}`);
    }
}

const user1 = new user('wasim', 'ww', '123')
//console.log(user1);
// console.log(user1.encrptPass());
// console.log(user1.usernameUppercase);


// behine sicene using prototype


function userDetails(name, email, pass) {
    this.name = name
    this.email = email
    this.pass = pass
}

userDetails.prototype.upperCase = function(){
    console.log(`Name : ${this.name.toUpperCase()}`);
}

const userChai = new userDetails('Chai', 'aaa', '1233')
console.log(userChai);
console.log(userChai.upperCase());
