console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; //empty array for data to go in.

var cardOne = cards[0];  //new variable to store "queen" in. This way we can retrieve it.
var cardTwo = cards[1];

cardsInPlay.push(cardOne); //should push "queen" (cardOne's data) into cardsInPlay
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay);
console.log("User flipped " + cardsInPlay);

if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
}
else {
  alert("Sorry, try again.");
}
