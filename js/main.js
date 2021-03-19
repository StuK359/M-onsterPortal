/*----- constants -----*/
const gameTitle; 

var gameTitleMessage = “Welcome to the Monster Portal!”;

/*------ sound declarations -----*/
const audioCheer = new Audio('sounds/cheer.mp3');
const audioTaDa = new Audio('sounds/tada.mp3');
const audioMonsterPortalThemeSong = new Audio('sounds/monsterportal-themesong.mp3');
audioMonsterPortalThemeSong.volume = .4;
const audioCowbell = new Audio('sounds/cowbell.mp3');
const audioQuit = new Audio('sounds/quit.mp3');
const audioSoSad = new Audio('sounds/toobad.mp3');
const audioMonsterRoar = Audio('sounds/mp-roar.mp3')



/*----- app's state (variables) -----*/
var playTotallyOriginalThemeSong; 
var nextMonsterTile;
var howToPlayURL = “html/howtoplay.html”; 
var badGuessesRemaining;
var correctGuessesMade;
var totalGuessesMade;
var gameWins;
var gameLosses;


/*----- cached element references -----*/
var tile1 = “imgs/mp1.jpg”;
var tile2 = “imgs/mp2.jpg”;
var tile3 = “imgs/mp3.jpg”;
var tile4 = “imgs/mp4.jpg”;
var tile5 = “imgs/mp5.jpg”;
var tile6 = “imgs/mp6.jpg”;
var tile7 = “imgs/mp7.jpg”;  


/*----- event listeners -----*/
// document.getElementById('demo-button').addEventListener('click', renderGame;
// everykeytop object needs an event handler that determines whether a click was 
// a correct guess or an incorrect guess. Something like evaluateGuess();
// 


/*----- functions -----*/



function renderGame() {

}

//   setTimeout(() => {initializeGame(); }, 3000);
//   setTimeout(() => {renderGame(); }, 4000);
  

/*----- Game Functions -----*/

function initGame() {
  nextMonsterTile = tile1;
  gameTitle = “Monster Portal™”; 
  playTotallyOriginalThemeSong = false;
  howToPlayURL = “html/howtoplay.html”; 
  badGuessesRemaining = 7;
  correctGuessesMade = 0;
  totalGuessesMade = 0;
  gameWins = 0;
  gameLosses = 0;
}

function renderGame() {
  console.log("\nGame Rendered.");
};

function evaluateGuess(guess) {
// Something like 'isCorrect(guess)?doCorrectGuessStuff(); : doWrongGuessStuff();
};

function guessCorrect() {
// Turn keytop red.
// decrement badGuessesRemaining--
// set nextTileVisible(nextTile, true);
// NextTile++.
// updateScoreboard();
// renderGame();  
};

function guessWrong() {
  // Turn keytop red.
// decrement badGuessesRemaining--
// set nextTileVisible(nextTile, true);
// NextTile++.
// updateScoreboard();
// renderGame(); 
};


/*----- Classes -----*/
class keytopObject {
  constructor(letter, correct) {
    this.letterName = letter;
    this.letterCorrect = correct;
  } 
};

class secretPasswords {
};

class keyboardObjectArray {
};

class currentSecretPassword {
};

class demoScript {
};

/*----- Start of Game -----*/




