/*----- constants -----*/
const gameTitle = new String("Monster Portal");

const listSecretPasswords = [
  "MISSISSIPPI", /* 1 */
  "MARSUPIAL",   /* 2 */
  "MOUNTAIN",    /* 3 */
  "MONKEY",      /* 4 */
  "SPATULA",     /* 5 */
  "BICYCLE",     /* 6 */
  "LUNCH",       /* 7 */
  "PIZZA",       /* 8 */
  "ORANGUTAN",   /* 9 */
  "SHOVEL",      /* 10 */
  "CANINE",      /* 11 */
  "TABLE",       /* 12 */
  "UMBRELLA",    /* 13 */
  "PARADE",      /* 14 */
  "WIZARD",      /* 15 */
  "PANDEMIC",    /* 16 */
  "THEATER",     /* 17 */
  "DESERT",      /* 18 */
  "FOREST",      /* 19 */
  "SURFBOARD"    /* 20 */
  ]; 


/*------ sound declarations -----*/
const audioCheer = new Audio('sounds/cheer.mp3');
const audioTaDa = new Audio('sounds/tada.mp3');
// const audioMonsterPortalThemeSong = new Audio('sounds/monsterportal-themesong.mp3');
// audioMonsterPortalThemeSong.volume = .4;
const audioCowbell = new Audio('sounds/cowbell.mp3');
const audioQuit = new Audio('sounds/quit.mp3');
const audioSoSad = new Audio('sounds/toobad.mp3');



/*----- app's state (variables) -----*/
// var playTotallyOriginalThemeSong = false; /* Enable this if time permits */
var nextMonsterTile;
var badGuessesLeft;  /* id="bad-guesses-left" */
var gamesWon;             /* id="game-wins" */
var gamesLost;            /* id="game-losses" */
var guess;                /* Current player's letter guess. */
var luckyGuess = false    /* Indicates whether their guess is correct or not.

var SecretPassword = "";
var SecretPasswordLetterMask;


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
mtImg1.style.display = "none";
mtImg2 = document.getElementById('mt-img-2');
mtImg2.style.display = "none";
mtImg3 = document.getElementById('mt-img-3');
mtImg3.style.display = "none";
mtImg4 = document.getElementById('mt-img-4');
mtImg4.style.display = "none";
mtImg5 = document.getElementById('mt-img-5');
mtImg5.style.display = "none";
mtImg6 = document.getElementById('mt-img-6');
mtImg6.style.display = "none";
mtImg7 = document.getElementById('mt-img-7');
mtImg7.style.display = "none";


/*----- event listeners -----*/
// document.getElementById('demo-button').addEventListener('click', renderGame);

// Every keytop button needs an event handler that determines whether a click was 
// a correct guess or an incorrect guess. Something like isGuessCorrect(guess).
// Temorary test until full renderGame() is completed.
document.getElementById('A').addEventListener('click', isGuessCorrect);
document.getElementById('B').addEventListener('click', isGuessCorrect);
document.getElementById('C').addEventListener('click', isGuessCorrect);
document.getElementById('D').addEventListener('click', isGuessCorrect);
document.getElementById('E').addEventListener('click', isGuessCorrect);
document.getElementById('F').addEventListener('click', isGuessCorrect);
document.getElementById('G').addEventListener('click', isGuessCorrect);
document.getElementById('H').addEventListener('click', isGuessCorrect);
document.getElementById('I').addEventListener('click', isGuessCorrect);
document.getElementById('J').addEventListener('click', isGuessCorrect);
document.getElementById('K').addEventListener('click', isGuessCorrect);
document.getElementById('L').addEventListener('click', isGuessCorrect);
document.getElementById('M').addEventListener('click', isGuessCorrect);
document.getElementById('N').addEventListener('click', isGuessCorrect);
document.getElementById('O').addEventListener('click', isGuessCorrect);
document.getElementById('P').addEventListener('click', isGuessCorrect);
document.getElementById('Q').addEventListener('click', isGuessCorrect);
document.getElementById('R').addEventListener('click', isGuessCorrect);
document.getElementById('S').addEventListener('click', isGuessCorrect);
document.getElementById('T').addEventListener('click', isGuessCorrect);
document.getElementById('U').addEventListener('click', isGuessCorrect);
document.getElementById('V').addEventListener('click', isGuessCorrect);
document.getElementById('W').addEventListener('click', isGuessCorrect);
document.getElementById('X').addEventListener('click', isGuessCorrect);
document.getElementById('Y').addEventListener('click', isGuessCorrect);
document.getElementById('Z').addEventListener('click', isGuessCorrect);

/*----- Game Functions -----*/
gamesWon = 0;
gamesLost = 0;

function initGame() {
  
  var firstSL = document.getElementById("sp-l1");
  console.log(firstSL.innerHTML);
  // firstSL.style.display="none";

  var firstMonsterTile = document.getElementById("mt-img-1");
  // firstMonsterTile.style.display="none";
  
  nextMonsterTile = tile1;
/* Hide monster: */
  mtImg1 = document.getElementById('mt-img-1');
  mtImg1.style.display = "none";
  mtImg2 = document.getElementById('mt-img-2');
  mtImg2.style.display = "none";
  mtImg3 = document.getElementById('mt-img-3');
  mtImg3.style.display = "none";
  mtImg4 = document.getElementById('mt-img-4');
  mtImg4.style.display = "none";
  mtImg5 = document.getElementById('mt-img-5');
  mtImg5.style.display = "none";
  mtImg6 = document.getElementById('mt-img-6');
  mtImg6.style.display = "none";
  mtImg7 = document.getElementById('mt-img-7');
  mtImg7.style.display = "none";

/* Initialize Scoreboard: */
badGuessesLeft = 7;
document.getElementById("bad-guesses-left").innerHTML = badGuessesLeft;
document.getElementById("games-won").innerHTML = gamesWon;
document.getElementById("games-lost").innerHTML = gamesLost;

/* Choose Secret Password */

chooseSecretPassword();

// Hiding the Secret Password letters:
  document.getElementById("sp-l1").innerHTML = "*";
  document.getElementById("sp-l2").innerHTML = "*";
  document.getElementById("sp-l3").innerHTML = "*";
  document.getElementById("sp-l4").innerHTML = "*";
  document.getElementById("sp-l5").innerHTML = "*";
  document.getElementById("sp-l6").innerHTML = "*";
  document.getElementById("sp-l7").innerHTML = "*";
  document.getElementById("sp-l8").innerHTML = "*";
  document.getElementById("sp-l9").innerHTML = "*";
  document.getElementById("sp-l10").innerHTML = "*";
  document.getElementById("sp-l11").innerHTML = "*";

  guess = "";
}


/*----- Classes -----*/
// None used.

/*----- Start of Game -----*/
initGame();

/* Is guess good or bad? */

/* Process Bad Guess */
function processBadGuess(guess) {
  audioSoSad.play();
  showNextMonsterTile(nextMonsterTile);
  document.getElementById('bad-guesses-left').innerHTML = badGuessesLeft.toString();

  if (badGuessesLeft) {
    return; 
  } else {
    gameIsLost();
    return;
  }
};

/* Process Good Guess */
function processGoodGuess(guess) {
  audioTaDa.play();
  for (var i = 0; i < SecretPassword.length; i++) {
    if (SecretPasswordLetterArray[i] === guess) {
      document.getElementById('sp-l${i}').innerHTML = guess;
    }; 
  }
  if (!SecretPasswordLetterArray) {
    return gameIsWon();
  } else {
    return;
  } 
};

function showNextMonsterTile(nextMonsterTile) {
  showMonsterTile(nextMonsterTile);
};

function showMonsterTile(nextMonsterTile) {
   switch(badGuessesLeft) {
    // setTile1Visible
    case 7:
      mtImg1.style.display = "list-item";
      badGuessesLeft = 6;
    break;
    
    case 6:
      mtImg2.style.display = "list-item";
      badGuessesLeft = 5;
      break;
    
    case 5:
      mtImg3.style.display = "list-item";
      badGuessesLeft = 4;
      break;

    case 4:
      mtImg4.style.display = "list-item";
      badGuessesLeft = 3;
      break;

    case 3:
      mtImg5.style.display = "list-item";
      badGuessesLeft = 2;
      break;

    case 2:
      mtImg6.style.display = "list-item";
      badGuessesLeft = 1;
      break;
    
    case 1:
      mtImg7.style.display = "list-item";
      badGuessesLeft = 0;
      break;
   }
};


function gameIsWon () {
  audioCheer.play();
  document.getElementById('msg-game-banner').innerHTML = "You Won! Play Again? Press 'Start Game'!";
};

function gameIsLost() {
   // Set msgGameBanner to, "You lost!"
   // After a short pause, set msgGameBanner to "Play Again?"
   gamesLost++;
   document.getElementById('games-lost').innerHTML = gamesLost.toString();
   document.getElementById('msg-game-banner').innerHTML = "You Lost! Play Again? Press 'Start Game'!";
};

/* Random Secret Password picker: */
function chooseSecretPassword() {
   var idxSecretPassword = Math.floor(Math.random() * 20) + 1;

   SecretPassword = listSecretPasswords[idxSecretPassword];
    
    // For Testing Purposes Only
    SecretPassword = "MISSISSIPPI";
    SecretPasswordLetterArray = SecretPassword.split('');
};

function isGuessCorrect(guess) {
  var currentKeytopColor = this.style.backgroundColor;
  if (currentKeytopColor === 'red' || currentKeytopColor === 'green') {
    audioCowbell.play();
    return;
  };
  guess = this.id;
  var luckyGuess = SecretPassword.indexOf(guess);

  if (luckyGuess >=0) {
    this.style.backgroundColor='Green';
    processGoodGuess(guess);
  } else {
    this.style.backgroundColor='Red';
    processBadGuess(guess);
  }
  return luckyGuess;
}

