
var Word = require("./word");

var inquirer = require("inquirer");

var words = ["scissor","paper","rock","water","car","house","gym","package"];

var guessCnt = 10;

var wordToGuess = "";

function randomCnt(){
    // Below we can receive 0 so we don't have to do plus 1
    var random = Math.floor(Math.random() * words.length);

    return random;
}

function beginGame(randomWord){
    
    var word = randomWord;

    console.log(word.currentWord());

    inquirer
    .prompt([
        {
            name: "guess",
            message: "Guess a letter! ",
            type: "input",
            validate: value => {
                var char = value.toLowerCase();

                var numbers = /^[0-9]+$/;

                // make sure we don't receive numbers
                if(char.value.match(numbers)){
                    return false;
                }

                // Only one character
                if(char.length === 1){
                    return true;
                }

                return false;
            }
        }
    ])
    .then(function(answer){

        word.letterGuess(answer.guess);

        var tempWord = word.currentWord();

        // If the word does not contain any Underscores
        // , you have guessed all letters
        if(!tempWord.includes('_') && guessCnt > 0){
            console.log("You won!")
            console.log(`${tempWord}`);

            // We need the app to completly restart
            // Which is why we return the Main function
            return main(); 
        }

        guessCnt--;

        if(guessCnt === 0){
            console.log("You lost");
            return main();
        }

        // Iterate through the word
        beginGame(word);

    })
}

// Main will get called at the beginning of the app
// and Only when the word is either guessed or when 
// user lost
function main(){

    // get a random word
    wordToGuess = words[randomCnt()];

    console.log("In Main");
    console.log(wordToGuess);

    // create the word object
    var word = new Word(wordToGuess);

    // load the word
    beginGame(word);

}

// start the game
main();


