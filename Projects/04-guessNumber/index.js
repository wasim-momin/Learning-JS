// const form = document.querySelector('form')
// const submitButton = document.getElementById('subt')
// console.log(form);

// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     const guessNumer = parseInt(document.getElementById('guessField').value)
//     const errorMessage = document.querySelector(".error")
    
//     if(guessNumer === "" || guessNumer <=0 || isNaN(guessNumer)){
//         errorMessage.innerHTML = "Please enter a number between 1 to 100"   
//     }
//     const PrevNumber = []
//     PrevNumber.push(guessNumer)
//     console.log(PrevNumber);
    

// })


let randomNumber = parseInt(Math.random()*100 +1)
console.log('random ', randomNumber);

const btnClick = document.querySelector("#subt")
const getguessNumber = document.querySelector("#guessField")
const errorMessage = document.querySelector("#error")
const printpreviousGuessNumberList = document.querySelector('.guesses')
const remainingGuessNumber = document.querySelector('.lastResult')
const btnStartGame = document.querySelector('.btn-start-game')


const messageText = document.querySelector('.message')

let previousGuessNumberList = []
let startGameNumber = 1

// jab hum game ke project banate hai tab hum ye flag use karna hai
let playGame = true

//console.log(randomNumber);
btnStartGame.style.display = 'none'

printpreviousGuessNumberList.style.display = 'none'

if (playGame){
    btnClick.addEventListener('click', function(e){
        e.preventDefault()
        btnStartGame.style.display = 'none'
        let inputValue = parseInt(getguessNumber.value)
        console.log('input value',inputValue);
        validationOfGuess(inputValue)
        printpreviousGuessNumberList.style.display = 'block'
    });
}

function validationOfGuess(guess){
     console.log(guess)
    if(isNaN(guess) || guess === "" || guess < 1){
        errorMessage.innerHTML = "Please enter number between 1 - 100"
        getguessNumber.value = ""
    }else{
        errorMessage.innerHTML = ''
        previousGuessNumberList.push(guess)
        if(startGameNumber === 10){
           //displayMessages(`Sorry but luck next time`)
            guessCleanUP (guess)
            checkGuesses(guess)
            endGame()
        } 
        else{
            guessCleanUP(guess)
            checkGuesses(guess)
        }
    }
    
}

function checkGuesses(guess){
    console.log(guess, randomNumber);
    
    if(guess === randomNumber){
        displayMessages(`woooo, yon won the Game`)
        endGame()
    }
    
}

function guessCleanUP (guess) {
    getguessNumber.value = ""
    printpreviousGuessNumberList.innerHTML += `${guess} ,`
    console.log(printpreviousGuessNumberList);
    
    startGameNumber++
    remainingGuessNumber.innerHTML = `${11 - startGameNumber}`
}


function displayMessages(message){
    console.log('message', message);
    
    messageText.innerHTML = `${message}`
}

function endGame(){
    getguessNumber.value = ""
    getguessNumber.setAttribute('disabled','')
    btnStartGame.style.display = 'block'
    playGame = false;
    newGame();
}

function newGame(){
    
    btnStartGame.addEventListener('click', function(e){
        btnStartGame.style.display = 'none'
        randomNumber = parseInt(Math.random()*100 +1)
        console.log('rand', randomNumber);
        getguessNumber.removeAttribute('disabled','')
        printpreviousGuessNumberList.innerHTML=""
        startGameNumber = 1;
        remainingGuessNumber.innerHTML = `${11 - startGameNumber}`
        previousGuessNumberList = []
        messageText.innerHTML=""
        printpreviousGuessNumberList.style.display = 'none'
        playGame = true
    })
}

