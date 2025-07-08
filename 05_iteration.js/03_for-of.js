// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const key of arr){
    //console.log(key);// print value
}
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps is js build in func hai

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map); //print in object format

for(const key of map){
 //   console.log(key);// print in array format
}
for(const [key, value] of map){
    console.log(key);// print key 
    console.log(value);// print value
}