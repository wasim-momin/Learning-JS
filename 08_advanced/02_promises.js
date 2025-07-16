// const promiseOne = new Promise(function (resolve, reject) {
//     // DO an aynch task
//     // DB calls, cryptograpshy , network
//     setTimeout(function () {
//         console.log('task one is completed');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log('promise 1 success');
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('task two is completed');
//         resolve()
//     }, 1000)
// }).then(() => console.log('promise 2 success'))


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({
//             userName: "Chai",
//             password: 123,
//         })
//     }, 1000)
// })
// promiseThree.then(function (response) {
//     console.log(response);
// })
// const promiseFour = new Promise(function (resolve, reject) {
//     let error = true
//     if (!error) {
//         setTimeout(function () {
//             resolve({
//                 userName: "Chai",
//                 password: 123,
//             })
//         }, 1000)
//     }
//     else {
//         reject("ERROR : Something wen wrong")
//     }
// })

// promiseFour
//     .then((response) => {
//         console.log(response);
//         return response.userName
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {
//         console.log('finaly run');
//     })


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({
//                 userName: "Chai",
//                 password: 123,
//             })
//         }
//         else {
//             reject("ERROR : Something wen wrong")
//         }
//     }, 1000)
// })
// async function consumePromiseFIve() {
//     try{
//         const response = await promiseFive
//         console.log(response);

//     } catch(error){
//         console.log(error);

//     }
// }
// consumePromiseFIve()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('error');
//     }
// }
// getAllUsers()
const requestURL = 'https://jsonplaceholder.typicode.com/users'
fetch(requestURL)
.then((response)=>{
    console.log(response);
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))