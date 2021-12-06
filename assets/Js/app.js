// Declaration
let firstValue = getRandomCard()
let secondValue = getRandomCard()
let cards = [firstValue,secondValue]
let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false
let canvas = document.getElementById("canvas")
let start = document.getElementById("start")
let drawCardBtn = document.getElementById("draw")

document.querySelector("p").style.display = "none"
document.querySelector("br").style.display = "none"
document.querySelector("#message").style.display = "none"

drawCardBtn.style.display = "none"
// Random Number Function
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber
    }
}
///////
for(let j=0;j<cards.length;j++){
    sum = sum+cards[j]
}
// StartGame Function
start.addEventListener("click", function startGame(){
    isAlive = true
    if(firstValue && secondValue != null){
        document.getElementById("cards-el").textContent = "Cards: " + cards
        document.getElementById("sum-el").textContent ="Sum: " + sum
        document.querySelector("p").style.display = "block"
        document.querySelector("br").style.display = "block"
        document.querySelector("#message").style.display = "block"
    }
    if(sum<21){
        message = "Do you want to draw a new card? 🙂"
        isAlive = true
        if(sum!=0){
            start.style.display = "none"
            drawCardBtn.style.display = "block"
    }
    }   
    else if(sum === 21){
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        drawCardBtn.style.display = "none"
    }
    else{
        message = "You're out of the game! 😭"
        isAlive = false
    }
    if(isAlive === false){
        // start.style.display = "none"
        start.textContent = "Play Again?"
        start.addEventListener("click", function playAgain(){
            window.location.reload()
        })
    }
    if(hasBlackJack === true){
        start.textContent = "Play Another Round"
        start.addEventListener("click", function anotherRound(){
            window.location.reload()
        })
    }
    if(isAlive === true && hasBlackJack === false && sum === null){
        drawCardBtn.style.display = "block"
    }
    document.getElementById("message").textContent = message
})

drawCardBtn.addEventListener("click", function drawCard(){
    if(sum<21){
        let draw = getRandomCard()
        cards.push(draw)
        sum += draw
    }
    else if(sum === 21){
        drawCardBtn.style.display = "none"
    }
    document.getElementById("cards-el").textContent ="Cards: " + cards
    drawCardBtn.style.display = "none"
    start.style.display = "block"
    start.textContent = "Check!"
})