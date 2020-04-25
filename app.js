document.addEventListener('DOMContentLoaded', () => {

    //Card options 
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]
    //Randomizing Card Display for new game
    cardArray.sort(() => 0.5 - Math.random());

    //Creating Gameboard 
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenId = []; 
    let cardsWon = [];  


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card);
        }
    }
    createBoard(); 

    //check for matches 
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]; 
        const optionTwoId = cardsChosenId[1]; 
        if (cardsChosen[0] === cardsChosen [1]) {
           cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length 
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You won the game!'
            let newgame = confirm("Do you want to play again?");
            if (newgame === true) {
                location.reload();
                
            }
        }
    }
   
    //flip your card
    function flipcard() {
     let cardId = this.getAttribute('data-id')
     cardsChosen.push (cardArray[cardId].name)
     cardsChosenId.push(cardId)
     this.setAttribute('src', cardArray[cardId].img)
     if (cardsChosen.length === 2) {
         setTimeout(checkForMatch, 200)
     }
    }
})
