
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

        if(!tempWord.includes('_') && guessCnt > 0){
            console.log("You won!")
            console.log(`${tempWord}`);
            main();
        }

        guessCnt--;

        if(guessCnt === 0){
            console.log("You lost");
        }

        beginGame(word);

    })
}

function main(){
    wordToGuess = words[randomCnt()];

    var word = new Word(wordToGuess);

    beginGame(word);

}


main();


