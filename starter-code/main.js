var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

var cards = ["king", "queen", "king", "queen"];    
    
var gameBoard = document.getElementById('game-board');

function createCard() {
    for (var i = 0; i < cards.length; i++) {
        var cardOne = document.createElement("div");
        cardOne.className = "card";
        gameBoard.appendChild(cardOne);
        cardOne.setAttribute("data-card", cards[i]);
        cardOne.addEventListener("click", isTwoCards);
    }
};
        
var cardsInPlay = [];

function isTwoCards() {
    if (this.getAttribute("data-card") === "queen") {
        this.innerHTML = '<img src="queenDiamonds.png" alt="Queen of Diamonds"/>';
    } if (this.getAttribute("data-card") === "king") {
        this.innerHTML = '<img src="kingSpades.png" alt="King of Spades"/>';
    }
    cardsInPlay.push(this.getAttribute("data-card"));
    if (cardsInPlay.length === 2) {
      isMatch();
      cardsInPlay = [];
    }
};

  
function isMatch(cards) {
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert('You found a match!');
    } else{
        alert('Sorry, try again.');
    }
};

createCard();