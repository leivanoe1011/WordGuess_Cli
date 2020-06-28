
// Each letter from the word JS will create a new 
// constructor. 
// Once the letter is guessed, the flag below will be flipped
// to true.
var Letter = function(letter){

    this.letter = letter.toLowerCase(); 
    this.letterGuessed = false;
    
    this.returnCharacter = function(){
        // Here we return either an underscore
        // or the letter depending on the 
        // Letter Guessed flag.
        if(this.gotLetterletterGuessed){
            return `${this.letter} `;
        }

        return "_ ";
    }

    this.userGuess = function(letter){
        // Here we intake the letter
        // Then determine if the letter is correct.
        var gotLetter = letter.toLowerCase();

        if(this.letter === gotLetter){
            letterGuessed = true;
        }

    }
}

module.exports = Letter;

