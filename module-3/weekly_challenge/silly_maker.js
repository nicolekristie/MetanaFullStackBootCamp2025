const prompt = require("prompt-sync")();

//Challenge 1: Silly Sentence Maker

const promptInput = prompt("Enter 4 words with spaces in between:");
const values = promptInput.split(",")
console.log(values)
console.log(`I like to go  ${values[0]} ${values[1]} and have a ${values[2]} fun ${values[3]}`)