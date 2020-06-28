
var Word = require("./word");

var inquirer = require("inquirer");

var words = ["scissor","paper","rock","water"];

var guessCnt = 10;

var wordToGuess = "";

function randomCnt(){
    // Below we can receive 0 so we don't have to do plus 1
    var random = Math.floor(Math.random() * words.length);

    return random;
}

function beginGame(randomWord){
    
    var word = randomWord;

    inquirer
    .prompt([
        {
            name: "guess",
            message: "Guess a letter! ",
            type: "input"
        }
    ])
    .then(function(answer){
        console.log(answer);

        word.letterGuess(answer.guess);

        var tempWord = word.currentWord();

        // If the word does not contain any Underscores
        // , you have guessed all letters
        if(!tempWord.includes('_') && guessCnt > 0){
            console.log("You won!")
            console.log(`${tempWord}`);
            main();
        }

        guessCnt--;

        if(guessCnt === 0){
            console.log("You lost");
            main();
        }

        // Iterate through the word
        beginGame(word);

    })
}

function main(){

    // get a random word
    wordToGuess = words[randomCnt()];

    // create the word object
    var word = new Word(wordToGuess);

    // load the word
    beginGame(word);

}

// start the game
main();


