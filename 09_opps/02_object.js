function numBy5(num){
    return num*5;
}

numBy5.power = 5

// console.log(numBy5(5));
// console.log(numBy5.power);
// console.log(numBy5.prototype);

function chaiInfo(name, price){
    this.name = name
    this.price = price
}

chaiInfo.prototype.printMe = function(){
    console.log(`${this.name} - ${this.price}`);
}

const chai = new chaiInfo("chai", 20)
const tea = new chaiInfo("Tea", 200)

// chai.printMe()
// tea.printMe()


// using constructor
class chaiInfoClass{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    printMeClass(){
        console.log(`using constructor => ${this.name} - ${this.price}`);
    }
}
const chaiClas = new chaiInfoClass("chai", '123')

console.log(chaiClas.printMeClass());


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/