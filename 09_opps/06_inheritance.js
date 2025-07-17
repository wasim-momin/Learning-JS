class user{
    constructor (name){
        this.name = name
    }
    logme(){
        console.log(`user name is from user class=> ${this.name}`);   
    }
}

class Teacher extends user{

    constructor(name, email){
        super(name)
        this.email = email
    }

    addcourse(){
        console.log(`New course added by ${this.name} sir`);
    }
}

const chai = new Teacher("wasim", 'aa','122')
chai.addcourse()
chai.logme()
console.log(chai instanceof Teacher);
console.log(chai instanceof user);

const masalachai = new user("momin")
masalachai.logme()
console.log(masalachai instanceof user);