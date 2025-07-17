


// const Myarray =['wasim', 'momin']

// Array.prototype.myProtoFunction = function(){
//     // console.log('functin is added in array');
// }

// //Myarray.myProtoFunction()
// Myarray.myObjProtoFunction() // it will give error q k object se proto function sab jage access honga lekin child nai kar payega
// const Myobj = {
//         name:'wasim'
// }

// Object.prototype.myObjProtoFunction = function(){
//     // console.log('functin is added in object');
// }

// Myobj.myObjProtoFunction()
// Myarray.myObjProtoFunction()

const user = {
    name:"chai",
    email:"aa.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssign:'js assign',
    fullTime: true,
    __proto__: TeacherSupport // proto type inheritance
}
Teacher.__proto__= user // proto type inheritance

console.log(Teacher.name);


// in modren way

Object.setPrototypeOf(TeacherSupport, Teacher)
console.log(TeacherSupport.makeVideo);

//create our own prototype

let name = "wasim        "

console.log(name.length);

String.prototype.trueLength = function(){
    const trimText = this.trim().length
    console.log(`${this}`);
    console.log(`True lenth is : ${trimText}`);
}

name.trueLength()