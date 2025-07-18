//using class
class User{
    constructor(email, pass){
        this.email = email
        this.pass = pass
    }

    get pass(){
        // return this._pass.toUpperCase()
        return `${this._pass.toUpperCase()}wasim`
    }
    set pass(value){
        this._pass = value
    }

}

const user1 = new User("emai.com","addd")
//console.log(user1.pass);


//using function
function UserFunction(email, pass){
    this._email = email
    this._pass = pass

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const userFunc1 = new UserFunction('abcc@g.com', "1233")
//console.log(userFunc1.email);


// usning object base
const UserObj = {
    _email:"wasss@gmail.com",

    get email(){
        console.log("➡️ Getter called");
        console.log("this =", this);
        console.log("this._email =", this._email);
        return this._email.toUpperCase()
    },

    set email(value){
        console.log("🛠️ Setter called");
        console.log("Setting this._email to:", value);
        this._email = value
        console.log(value === this._email);
    }
}

const userobj1 = Object.create(UserObj)
console.log("🔧 Created user1 from User");

// Accessing email before setting
console.log("\n📤 Getting user1.email (before set):");
console.log("Output:", userobj1.email);

// Setting new email
// console.log("\n✏️ Setting user1.email to 'new@gmail.com'");
// userobj1.email = "new@gmail.com";

// // Accessing email after setting
// console.log("\n📤 Getting user1.email (after set):");
// console.log(" New Output:", userobj1.email);

// // Check where the email is stored
// console.log("\n🔍 Check actual storage:");
// console.log("user1._email =", userobj1._email);  // new@gmail.com (own property)
// console.log("User._email =", UserObj._email);    // wasss@gmail.com (prototype)
