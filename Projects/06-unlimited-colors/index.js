const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')


// understanding of code
// const randomColor = function () {
//   const hexValue = '0123456789ABCDEF'
//   let color = '#'

//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * 16)   // Random number between 0–15
//     const chosenChar = hexValue[randomIndex]             // Character at that index
//     console.log(`Step ${i + 1}: index = ${randomIndex}, character = ${chosenChar}`)
//     color += chosenChar
//   }

//   console.log('Final color:', color)
//   return color
// }

// randomColor()

const randomColor = function () {
  const hexValue = '0123456789ABCDEF'
  let color = '#'

  for (i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)]
  }
  console.log(color);

  return color
}


// btnStart.addEventListener('click', function (e) {
//   //randomColor()
//   setInterval(function () {
//     document.body.style.backgroundColor = randomColor()
//   }, 1000)
// })

// function changeBGColor (){
//     document.body.style.backgroundColor = randomColor()
//   }


let invervalId

const changeBGColor = function(){
  document.body.style.backgroundColor = randomColor()
}

const startChangingColor = function(){  
  if(!invervalId){
    invervalId = setInterval(changeBGColor, 1000) // yaha per humne () use nai q k hum yaha per sirf fun ka ref dete hai
  }
}
const stopChangingColor = function(){
  clearInterval(invervalId)
  invervalId = null
}

btnStart.addEventListener('click', startChangingColor) // yaha per humne () use nai q k hum yaha per sirf fun ka ref dete hai

btnStop.addEventListener('click', stopChangingColor) // yaha per humne () use nai q k hum yaha per sirf fun ka ref dete hai
