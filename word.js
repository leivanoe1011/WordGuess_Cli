

// Used to create an object representing the current word 
// the user is attempting to guess

var Letter = require("./letter");


var Word = function(word){

    this.word = word;
    this.currentWordArr = []; // this must be an array of Letter Constructor

    for(var i = 0; i < this.word.length; i++){
        var letter = new Letter(this.word[i]);

        // Loading the Letter constructor
        this.currentWordArr.push(letter);
    }
   
    // Return the letters that have been guessed or not guessed.
    this.currentWord = function(){
        var word = "";
        var wordArr = this.currentWordArr;

        for(var i = 0; i < wordArr.length; i++){
            // For each letter we call the Return Character/Letter
            // function. 
            // Here we going to return either an underscore or letter
            word += wordArr[i].returnCharacter();
        }

        return word;
    }

    // front end to the index js app
    this.letterGuess = function(letter){
        // We iterate through the Current Word Arr 
        // Call each letter function to validate if the letter
        // is correct.
        var gotLetter = letter;

        var wordArr = this.currentWordArr;

        for(var i = 0; i < wordArr[i].length; i++){
            wordArr[i].userGuess(gotLetter);
        }
        
    }
}

module.exports = Word;
