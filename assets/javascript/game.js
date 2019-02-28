

// Use key events to listen for the letters the players will type
// Press any get to get started.
var userInput = event.key;

// Display #of wins
// start game display of word with _ _ _ _ _
var questions = [
    { q: "_ _ _ _ _ _", a: "i s l a n d" },
    { q: "There are 365 days in a year.", a: "t" },
    { q: "There are 42 ounces in a pound.", a: "f" },
    { q: "The Declaration of Independence was created in 1745.", a: "f" },
    { q: "Bananas are vegetables.", a: "f" }
  ];
// As the player guesses correct, fill in blanks _ s _ a n d
// display number of guesses remaining
// display letters already guessed
// after game win or loss - the game should automatically chose another word and me the user play
