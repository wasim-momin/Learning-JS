//func is collection of code which we can use as package
//declarion/defination
function myFun (){
    console.log("Hello World")
}
//reference
//myFun
//exticaution 
//myFun()

// function addNumber (num1, num2){
//     console.log(num1 + num2);
// }
// addNumber(2,4)
// addNumber(2,"4")
// addNumber(2,null)
// addNumber(2,"a")

// const result = addNumber(3,4)
// console.log("result",result);

// function addNumber (num1, num2){
//     let addition = num1+num2
//     console.log("before return");
//     return addition
//     console.log("after return");
    
// }
// const result = addNumber(3,4)
// console.log("result",result);

// function addNumber (num1, num2){
//     return num1 + num2
    
// }
// const result = addNumber(3,4)
// console.log("result",result);

// function loginUser (userName){
//     return `${userName} is login`
// }
// const message = loginUser("wasim")
// console.log(message);
//handle undefine value
function loginUser (userName){
    if(!userName){
        console.log("enter user name");
        return
    }
    return `${userName} is login`
}
//const message = loginUser()
// const message = loginUser("Wasim")
// console.log(message);


//multiple parameters

// function kart(num1){
//     return num1
// }
// let result = kart(200,500,400)

// rest operator
// function kart(...num1){
//     return num1
// }
// let result = kart(200,500,400)
// console.log(result);

// function kart(val1, val2, ...num1){
//     return num1
// }
// let result = kart(200,500,400)
// console.log(result);

// using objects
// const user ={
//     name:"wasim",
//     price:2500
// }

// function objeFunc(anyObject){
//     return `My name is ${anyObject.name} and course price is ${anyObject.pr}`
//     return `My name is ${anyObject.name} and course price is ${anyObject.price}`
// }
// result = objeFunc(user)
// console.log(result);
// result = objeFunc({
//     name:"momin",
//     price:500
// })
// console.log(result);

const myArray = [200,400,500,600]

function handleArray(arrayValue){
    return arrayValue[2]
}

result = handleArray(myArray)
//console.log(result);
//console.log(handleArray([200,244,500]));




