const prompt = require("prompt-sync")();


const randomNumber = Math.floor(Math.random() * 11);

console.log(randomNumber);
let userRandomNum = prompt("Guess the number: ");
let count = 0;

while ( (randomNumber != userRandomNum & count<4)){
    console.log("Please try again:");
    userRandomNum = prompt("Guess the number: ");
    count++
}
if (randomNumber == userRandomNum){
    console.log("You guessed the correct number!");
}else {
    console.log('Sorry you did not guess the number :-(.')
}