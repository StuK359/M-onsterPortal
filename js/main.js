/*----- constants -----*/
const gameTitle = new String("Monster Portal");
const howToPlayURL = new String("html/howtoplay.html");

const listSecretPasswords = [
  "MISSISSIPPI",
  "MARSUPIAL",
  "MOUNTAIN",
  "MONKEY",
  "SPATULA",
  "BICYCLE",
  "LUNCH",
  "PIZZA",
  "Orangutan",
  "Shovel",
  "Canine",
  "Table",
  "Conflict",
  "Parade",
  "Wizard",
  "Pandemic",
  "Theater",
  "Desert",
  "Forest",
  "Surfboard"
  ]; 

/*------ sound declarations -----*/
const audioCheer = new Audio('sounds/cheer.mp3');
const audioTaDa = new Audio('sounds/tada.mp3');
const audioMonsterPortalThemeSong = new Audio('sounds/monsterportal-themesong.mp3');
audioMonsterPortalThemeSong.volume = .4;
const audioCowbell = new Audio('sounds/cowbell.mp3');
const audioQuit = new Audio('sounds/quit.mp3');
const audioSoSad = new Audio('sounds/toobad.mp3');
// const audioMonsterRoar = Audio('sounds/mp-roar.mp3')



/*----- app's state (variables) -----*/
var playTotallyOriginalThemeSong = false; 
var nextMonsterTile;
var badGuessesRemaining;
var correctGuesses;
var totalGuesses;
var gameWins;
var gameLosses;
var guess;


/*----- cached element references -----*/
var tile1 = "imgs/mp1.jpg";
var tile2 = "imgs/mp2.jpg";
var tile3 = "imgs/mp3.jpg";
var tile4 = "imgs/mp4.jpg";
var tile5 = "imgs/mp5.jpg";
var tile6 = "imgs/mp6.jpg";
var tile7 = "imgs/mp7.jpg";  

var nextMonsterTile = tile1;

    //Hiding the image using regular JavaScript.
mtImg1 = document.getElementById('mt-img-1');
// mtImg1.style.display = "none";

{/* <img id="mt-img-5" src="imgs/mp5.jpg"/>
<img id="mt-img-7" src="imgs/mp7.jpg"/>
<img id="mt-img-6" src="imgs/mp6.jpg"/>
<img id="mt-img-4" src="imgs/mp4.jpg"/>
<img id="mt-img-3" src="imgs/mp3.jpg"/>
<img id="mt-img-2" src="imgs/mp2.jpg"/>
<img id="mt-img-1" src="imgs/mp1.jpg"/> */}


/*----- event listeners -----*/
// document.getElementById('demo-button').addEventListener('click', renderGame;
// everykeytop object needs an event handler that determines whether a click was 
// a correct guess or an incorrect guess. Something like evaluateGuess();
// 

// document.getElementById("incorrect-guesses").innerText = "7";
// document.getElementById("correct-guesses").innerHTML = toString(correctGuesses);
// document.getElementById("game-wins").innerHTML = toString(gameWins);
// document.getElementById("game-losses").innerHTML = toString(gameLosses);

/*----- functions -----*/




function renderGame() {

}

//   setTimeout(() => {initializeGame(); }, 3000);
//   setTimeout(() => {renderGame(); }, 4000);
  

/*----- Game Functions -----*/

function initGame() {
  // mtImg1.style.display = 'none'; /* Doesnt seem to work. */
/* Doesn't seem to work either. */
  // document.getElementById('mt-img-1').style.display = 'none';
  // document.getElementById('mt-img-2').style.display = 'none';
  // document.getElementById('mt-img-3').style.display = 'none';
  // document.getElementById('mt-img-4').style.display = 'none';
  // document.getElementById('mt-img-5').style.display = 'none';
  // document.getElementById('mt-img-6').style.display = 'none';
  // document.getElementById('mt-img-7').style.display = 'none';
    //Hide the image using jQuery's hide() method.
    // $('#mt-img-1').hide();
  
  var firstSL = document.getElementById("sp-l1");
  console.log(firstSL.innerHTML);
  // firstSL.style.display="none";

  var firstMonsterTile = document.getElementById("mt-img-1");
  // firstMonsterTile.style.display="none";
  
  nextMonsterTile = tile1;

  playTotallyOriginalThemeSong = false;
  badGuessesRemaining = 7;
  correctGuessesMade = 0;
  totalGuessesMade = 0;
  gameWins = 0;
  gameLosses = 0;
  guess = "";
  renderGame();
}

function renderGame() {
  console.log("\nGame Rendered.");
};


/*----- Classes -----*/
class keytopObject {
  constructor(letter, correct) {
    this.letterName = letter;
    this.letterCorrect = correct;
  } 
};



/*----- Start of Game -----*/
initGame();



// /* ToDo List (look into creating an app for this...): */
// 1. That array of strings will hold the 21 passwords. 
// 2. Add “umbrella” to the list.
// 3. Use the Math.random % 21 trick to pick a random password and use it as the SecretPassword.
// 4 Assign each letter of the password to a space in the top row of the 9*2 grid; set the visible property to ‘false’.
// 5.  For the length of the password, set the glow property of the corresponding slots. 
// 6. Create the 13*2 keyboard grid, with 26 class=“keytop” buttons. 
// 7. Set the event handler for the click property on each teytop. 

/* Is guess good or bad? */
function processGuess(guess) {
};

function guessWrong() {
  // Turn keytop red.
  // decrement badGuessesRemaining--
  // set nextTileVisible(nextTile, true);
  // NextTile++.
  // updateScoreboard();
  // renderGame();  
  };
/* Process Bad Guess */
function processBadGuess(guess) {
  setBadKeytopRed(guess);
  RemainingGuesses--;
  showNextTile(nextMonsterTile);
  refreshScoreboard();

  if (!RemainingGuesses) {
    process(GameLost()); 
    return; 
  } else {
    return;
  }
};

/* Process Good Guess */
function processGoodGuess(guess) {
  setGoodKeytopGreen(guess);
  refreshScoreboard();

  if (!SPCharArray) {
    return process(GameWon());
  } else {
    return;
  } 
};

function showNextMonsterTile() {
  showCurrentMonsterTile(nextMonsterTile);
  updateNextMonsterTile(nextMonsterTile);
};

function showCurrentMonsterTile(nextMonsterTile) {
  showTile(nextMonsterTile);
};

function showMonsterTile(nextMonsterTile) {
   if(nextMonsterTile = tile1) {
    // setTileVisible
   } else if(nextMonsterTile= tile2) {
    // setTileVisible
  } else if(nextMonsterTile= tile3) {
    // setTileVisible
  } else if(nextMonsterTile= tile4) {    
    // setTileVisible
  } else if(nextMonsterTile= tile5) {
    // setTileVisible
  } else if(nextMonsterTile= tile6) {
    // setTileVisible
  } else if(nextMonsterTile= tile7) {
       // setTileVisible
  }
};

function refreshScoreboard() {
  console.log("\nScoreboard Refreshed.")
/* all relevant variables should already be changed, so just refresh screen. */
};

function guessedWrong() {
    // Turn keytop red.
  // decrement badGuessesRemaining--
  // set nextTileVisible(nextTile, true);
  // NextTile++.
  // updateScoreboard();
  // renderGame(); 
  };
  
  


/* Random Secret Password picker: */
function chooseSecretPassword() {

};
/* Dynamically create SecretLetterPasswordMask array for each unique letter in the Secret Password. */
/* This facilitates rapid assessment of Good Guesses. */
/* MISSISSIPPI example hard-coded for testing & demo: */
function createSecretPasswordLetterMask(SecretPassword) {
  /* see example of hardcoded SecretPasswordLetterMask, below. */
};

var SecretPasswordLetterMask = ["M", "I", "S", "P"];

function processEndGame(isWinOrLosss) {
/* Is this still needed, since both Good and Bad guess processes determine endgame states? */
/* Probably not.? */
};



class keyboardObjectArray {
};

class currentSecretPassword {
};

class demoScript {
};


