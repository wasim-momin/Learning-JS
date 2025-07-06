var c = 300
if (true){
const a = 10
let b = 20
 c = 30
 
}
// console.log(a);
// console.log(b);
console.log(c);

// intresting must read 

//This consle will give 3 o/p bcoz we are not store function in variable we can call function before its decaltion in this case
console.log(funOne(2));

function funOne (num){
    return num +1;
}

// but 

//This consle will give error bcoz we store function in variable we can not call function before its decaltion in this case
// console.log(funTwo(2));

const funTwo = function (num){
    return num +1;
}