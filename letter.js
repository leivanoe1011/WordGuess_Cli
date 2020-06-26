
// Each letter from the word JS will create a new 
// constructor. 
// Once the letter is guessed, the flag below will be flipped
// to true.
function Letter(){
    this.userLetter = ""; 
    this.letterGuessed = false;
    this.returnCharacter = function(){
        // Here we return either an underscore
        // or the letter depending on the 
        // Letter Guessed flag.
    }
    this.userGuess = function(letter){
        // Here we intake the letter
        // Then determine if the letter is correct.
    }
}