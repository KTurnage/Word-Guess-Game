//Hawaiian words/terms to guess
var hawaiianWords = ['island', 'aloha', 'talk story', 'mahalo', 'salt', 'good vibes', 'volcano', 'haleakala']
var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var lettersInWord = [];
var randomWord = "";
var blanksAndHits = [];

// Use key events to listen for the letters the players will type
// Press any get to get started.

onkeypress 

// Display Score
var wins = 0;
var losses = 0;

// start game display of word with _ _ _ _ _

// As the player guesses correct, fill in blanks _ s _ a n d
// display letters already guessed
if (){

}
else {

}
// display number of guesses remaining
var guessesRemain = 12;
var wrongLetterGuess = [];


// after game win or loss - the game should automatically chose another word and me the user play
//===================================================================//

function reset(){

}

function startGame(){
  
}

function startGame(){
  hawaiianWords = hawaiianWords[Math.floor(Math.random() * hawaiianWords.length)];
  lettersInWord = hawaiianWords.split('');     
  numBlanks = lettersInWord.length;

  wins = 0;
  guessesRemain = 10;
  wrongLetterGuess = [];
  blanksAndHits = [];    
  alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  // holds the number of underscores that match a one-word movie title
for(var i = 0; i< numBlanks; i++){
      blanksAndHits[i] = "_";    
      document.querySelector('#hawaiianWords').innerText = blanksAndHits;
  }

  document.querySelector('#hawaiianWords').innerText = blanksAndHits.join(' ');
  document.querySelector('#numGuessesLeft').innerText = guessesRemaining;
  document.querySelector('#wins').innerText = winCount;
  document.querySelector('#losses').innerText = lossCount;
  document.querySelector('#wrongLetterGuess').innerText = wrongLetters;

  console.log(hawaiianWords);
  console.log(lettersInWord);
  console.log(numBlanks);
  console.log(blanksAndHits);
}