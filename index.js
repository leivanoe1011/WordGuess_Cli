
var Word = require("./word");

var inquirer = require("inquirer");

var words = ["scissor","paper","rock","water"];

var wordToGuess = "";

function randomWord(){
    // Below we can receive 0 so we don't have to do plus 1
    var random = Math.floor(Math.random() * words.length);
    return random;
}

function main(){
    wordToGuess = words[randomWord()];

    var word = new Word(wordToGuess);



}


main();


