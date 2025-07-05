let myArray = [10,20,30,40,50,60, "Wasim", true]
// console.log(myArray)
// console.log(myArray[2])

const myArray1 = new Array(10,20,30,40,50,60)
// console.log(myArray1);

// myArray1.push(70)
// myArray1.push(80)
// myArray1.pop()

// console.log(myArray1);
// console.log(myArray1.includes(80));
// console.log(myArray1.indexOf(20));

// const joinArray = myArray1.join()
// console.log(joinArray);
// console.log(typeof joinArray);
// console.log(typeof myArray);


//slice and splice

// console.log("Slice ", myArray1.slice(2,4))
// console.log("Orignal ", myArray1);

// console.log("Orignal ", myArray1);
// console.log("Splice ", myArray1.splice(1,5))
// console.log("Orignal ", myArray1);


//Merge multiple array 
// myArray.push(myArray1)
// console.log(myArray)

// const concatArray = myArray.concat(myArray1)
// console.log(concatArray);

// const allArray = [...myArray, ...myArray1]
// console.log(allArray);

// const nestedArray = [1,2,3,[4,5],6,[7,[8,9,[10,11]]]]
// console.log(nestedArray)

// const mergeArray = nestedArray.flat(Infinity)
// console.log(mergeArray)

// console.log(Array.isArray("Wasim"));
// console.log(Array.from("Wasim"));
// console.log(Array.of("Wasim"));


// let a = 1
// let b = 2
// let c = 3
// console.log(Array.of(a,b,c));

let a = "java"
let b = "c"

const combArray = Array.of(a, b)
combArray.push("c++")
combArray.push(".net")
combArray.push("html")
combArray.push("css")
combArray.push("react")
combArray.push("angular")
console.log(combArray);

console.log(combArray.slice(0,4));
console.log(combArray.splice(4,4));
console.log(Array.from(a));
console.log(Array.of(a));
console.log(Array.isArray(a));
console.log(Array.isArray(combArray));


