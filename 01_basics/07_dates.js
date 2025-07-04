let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate)

const myCreateDate = new Date(2034,10,28)
const myCreateDateTime = new Date(2034,10,28,5,3)
const myCreateDateTime1 = new Date("2024-10-28")
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleDateString());
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDateTime1.toLocaleString());

let mytimeStamp = Date.now();
// console.log(mytimeStamp);
// console.log(myCreateDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay() + 1);

console.log(newDate.toLocaleDateString('default',{
    weekday: "long",
}));

