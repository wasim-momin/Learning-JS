function user(name){
    this.name = name
    console.log("user call");
}

function userinfo(name, pass){
    user.call(this, name)
    this.pass = pass
}

console.log(new userinfo("wasss", '123'));
