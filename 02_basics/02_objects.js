// Objects Literals
// symbol
const mySym = Symbol("key1")
const userList={
    name:"wasim",
    number:123456,
    isLoggedIn:true,
    lastLoginDays:["Monday", "Tuesday"],
    "full name":"Wasim Momin",
    [mySym]:"mykey1"
}

// console.log(userList.name);
// console.log(userList["name"]);
// console.log(userList["full name"]);
// console.log(userList[mySym]);

userList.name = "Wasim Mohammed Rafique"
// Object.freeze(userList)
// userList.name = "Wasim Mohammed Rafique Momin"

// console.log(userList);

// userList.myFun1 = function(){
//     console.log("Hello this fun 1")
// }
// userList.myFun2 = function(){
//     console.log(`Hello this fun 1, ${this["full name"]} `)
// }
// console.log(userList.myFun1());
// console.log(userList.myFun2());


//const userDetails = new Object() // singleton object / constractor

const newUser={
    email:"abc@gmail.com",
    fullName:{
        fName:"Wasim",
        lName:"Momin",
    }
}
//console.log(newUser.fullName?.fName);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(userList)
// console.log(Object.keys(userList))
// console.log(Object.values(userList))
// console.log(Object.entries(userList))
// console.log(userList.hasOwnProperty("lname"))


const course ={
    name:"js",
    price:2500,
    courseTeacherName:"hitesh",
}

const {courseTeacherName: teacher} = course
//console.log(teacher);

// {
//     "name":"wasim",
//     "lname":"wasim",
// }
// [
//     {},
//     {},
// ]
const objToArray = Object.entries(userList)
// console.log(Object.entries(userList));
// console.log(objToArray);
// console.log(Array.of(objToArray));