const myNums = [1, 2, 3]

// const reduceResult = myNums.reduce(function(acc, curValue){
//     console.log(`accumlator : ${acc} and current value : ${curValue}`)
//     return acc + curValue
// }, 0)

const reduceResult = myNums.reduce((acc, curValue)=>(acc + curValue),0)
//console.log(reduceResult);

const shoppingCart = [
    {
        itemName: "js course",
        price: 100
    },
    {
        itemName: "py course",
        price: 200
    },
    {
        itemName: "mobile dev course",
        price: 300
    },
    {
        itemName: "data science course",
        price: 400
    },
]


//const total = shoppingCart.reduce((acc, curValue)=> acc + curValue.price, 0)
// const total = shoppingCart.reduce(function(acc, curValue){
//     let price = curValue.price
//     if((price>0) && typeof price === Number){
//         console.log('number');
        
//     }
//     return acc + curValue.price
// }, 0)
// console.log(total);
