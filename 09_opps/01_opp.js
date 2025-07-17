const user = {
    userName:'wasim',
    loginCount:8,
    isLoggedIn:true,
    getuserInfo: function(){
        //console.log(`welcome, ${this.userName} to JS`);
    }
}
function userInfo (name,loginCount ,islogin){
    this.name = name
    this.loginCount = loginCount
    this.islogin = islogin
    this.greeting = function(){
        console.log(`welcom ${this.name}`);
    }

    return this // ye implicit define hota hai (likhe to bhi chalega)
}

// const user1 = userInfo('wasim', 8, true)
// const user2 = userInfo('wasim momin', 8, false)
// console.log(user1);

const user1 = new userInfo('wasim', 8, true)
const user2 = new userInfo('wasim momin', 8, false)
console.log(user1.constructor);
//console.log(user2);
