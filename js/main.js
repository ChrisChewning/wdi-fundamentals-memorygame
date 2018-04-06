//VAR SECTION
var cards = [
  {
  rank: "queen",
  suit: "hearts",
  image: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  image: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  images: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  images: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
//VAR 1: Stores initial data you put in.
/*VAR 2: This is an empty array, created for data to go in. When a user flips
a card, the data can go here. */
//both variables are global. They are outside the functions on purpose.


//FUNCTION SECTION
var checkForMatch = function() { //function 1: checks to see if cards are equal.
  if (cardsInPlay[0] === cardsInPlay[1]) { //you flip 2 cards and compare them.
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}; //this closes the checkForMatch function.

//cardsInPlay.push(cards[1]);
// adds the card the user flipped in the cards[cardId array] to the cardsInPlay array.

//FUNCTION 2: User flips the card. cardId is your parameter.
var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId].rank); //pushes the name of the card in cardsInPlay rank.
 cardsInPlay.push(cards[cardId].rank); //add card to the array of cards in play.

  if (cardsInPlay.length === 2) {  // Check to see if two cards have been played
    // If so, call the checkForMatch function
    checkForMatch();
    console.log(cards[cardId].suit); //card image
    console.log(cards[cardId].image); //card suit

    // Check to see if two cards have been played
      if (cardsInPlay.length === 2) {
        // If so, call the checkForMatch function
        checkForMatch();
        // Empty cards in play array for next try
        cardsInPlay = [];
      }
      }
    };


flipCard(0);  //flips the first card
flipCard(1); //flips the third card
