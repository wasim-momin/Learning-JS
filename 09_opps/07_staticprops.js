class User {
    constructor(name) {
        this.name = name
    }
    logme(){
        console.log(`user Name : ${this.name}`);
    }

    static createUserId(){ // static lagane se ki si bhi child eleent ko access nai denga jaise uper wala print de raha hai
        return `123`
    }
}

// const user1 = new User("wasim")
// console.log(user1.logme());
// console.log(user1.createUserId());

class Teacher extends User{
    constructor(name, email) {
        super(name)
        this.email = email
    }
}


const teacher = new Teacher("wasim", "aa@gma.com")
teacher.logme()
//console.log(teacher.createUserId());



