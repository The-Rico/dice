//Generate random number for Player 1 and Player 2
var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

//Console log for redundancy
console.log(randomNumber1)
console.log(randomNumber2)



// CHANGE PLAYER 1 DICE IMAGE
function changeP1() {
    if (randomNumber1 == 1) {
        const img1 = document.getElementById('img1');
        img1.setAttribute('src', './images/dice1.png');
    }    
    if (randomNumber1 == 2) {
        const img1 = document.getElementById('img1');
        img1.setAttribute('src', './images/dice2.png');
    }    
    if (randomNumber1 == 3) {
        const img1 = document.getElementById('img1');
        img1.setAttribute('src', './images/dice3.png');
    }    
    if (randomNumber1 == 4) {
        const img1 = document.getElementById('img1');
        img1.setAttribute('src', './images/dice4.png');
    }    
    if (randomNumber1 == 5) {
        const img1 = document.getElementById('img1');
        img1.setAttribute('src', './images/dice5.png');
    }
}
changeP1()

// CHANGE PLAYER 2 DICE IMAGE
function changeP2() {
    if (randomNumber2 == 1) {
        const img2 = document.getElementById('img2');
        img2.setAttribute('src', './images/dice1.png');
    }    
    if (randomNumber2 == 2) {
        const img2 = document.getElementById('img2');
        img2.setAttribute('src', './images/dice2.png');
    }    
    if (randomNumber2 == 3) {
        const img2 = document.getElementById('img2');
        img2.setAttribute('src', './images/dice3.png');
    }    
    if (randomNumber2 == 4) {
        const img2 = document.getElementById('img2');
        img2.setAttribute('src', './images/dice4.png');
    }    
    if (randomNumber2 == 5) {
        const img2 = document.getElementById('img2');
        img2.setAttribute('src', './images/dice5.png');
    }
}
changeP2()

// Change result title for winner

function resultTitle() {
    if (randomNumber1 > randomNumber2) {
        document.getElementById("result").innerHTML = "Player 1 Wins!";
    }    
    if (randomNumber1 < randomNumber2) {
        document.getElementById("result").innerHTML = "Player 2 Wins!";
    }
    else if (randomNumber1 == randomNumber2) {
        document.getElementById("result").innerHTML = "Draw!";
    }
}
resultTitle()