
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
        if(this.letterGuessed){
            return `${this.letter} `;
        }

        return "_ ";
    }

    this.userGuess = function(letter){
        // Here we intake the letter
        // Then determine if the letter is correct.
        var gotLetter = letter.toLowerCase();

        console.log(`In Letter User Guess ${gotLetter}`);

        console.log(`Current Letter ${this.letter}`);

        if(this.letter === gotLetter){
            console.log("Letter Guessed!!!!");
            this.letterGuessed = true;
        }

    }
}

module.exports = Letter;

