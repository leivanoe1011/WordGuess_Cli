
// Used to create an object representing the current word 
// the user is attempting to guess

function Word(){
    this.currentWordArr = []; // this must be an array of Letter Constructor
    this.currentWord = function(){
        var word = "";
        var wordArr = this.currentWordArr;
        
        for(var i = 0; i < wordArr.length; i++){
            // For each letter we call the Return Character/Letter
            // function. 
            // Here we going to return either an underscore or letter
            word += wordArr[i];
        }

        return word;
    }

    this.letterGuess = function(letter){
        // We iterate through the Current Word Arr 
        // Call each letter function to validate if the letter
        // is correct.
    }
}


