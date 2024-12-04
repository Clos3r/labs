const cardsArray = [
'img/1.jpg', 'img/1.jpg',
'img/2.png', 'img/2.png',
'img/3.png', 'img/3.png',
'img/4.png', 'img/4.png',
'img/5.png', 'img/5.png',
'img/6.png', 'img/6.png',
'img/7.png', 'img/7.png',
'img/8.jpg', 'img/8.jpg',
]


cardsArray.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('game-board');
let flippedCards = [];
let matchedPairs = 0;


function createBoard() {
cardsArray.forEach((imgSrc) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.img = imgSrc;
    

    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.display = 'none';
    card.appendChild(img);

    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
});
}


function flipCard() {
if (flippedCards.length === 2 || this.classList.contains('flipped')) return;

this.classList.add('flipped');
const img = this.querySelector('img');
  img.style.display = 'block';
flippedCards.push(this);

if (flippedCards.length === 2) {
    checkForMatch();
}
}


function checkForMatch() {
const [card1, card2] = flippedCards;

if (card1.dataset.img === card2.dataset.img) {
    matchedPairs++;
    flippedCards = [];

    if (matchedPairs === cardsArray.length / 2) {
    setTimeout(() => alert('Congratulations,you won!'), 500);
    }
} else {
    setTimeout(() => {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
    card1.querySelector('img').style.display = 'none';
    card2.querySelector('img').style.display = 'none';
    flippedCards = [];
    }, 1000);
}
}


createBoard();
