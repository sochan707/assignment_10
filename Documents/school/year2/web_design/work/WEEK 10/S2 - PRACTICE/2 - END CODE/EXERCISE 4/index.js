// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPasserord);

const instructionLabel = document.getElementById("instructionLabel");

// Update view
function updateView() {
  instructionLabel.textContent = `Enter your code (${remainingChances} chances left)`;
  tryAgainButton.textContent = `Try again ! (${remainingChances} chances left)`;

 
  if (hasWon) {
    showWin();

  } else {
    if (remainingChances == 0) {
      hide(tryAgainButton);
      showLost();
    }
  }
}

// Storage management
function readStorageChances() {
  var chances = localStorage.getItem("game-1-chances");
  if (chances != null) {
    return parseInt(chances);
  }
  return null;
}

function saveStorageChances() {
  localStorage.setItem("game-1-chances", remainingChances);
}

function readStorageHasWon() {
  var hasWon = localStorage.getItem("game-1-hasWon");
  if (hasWon != null) {
    return hasWon == "true";
  }
  return null;
}

function saveStorageHasWon() {
  localStorage.setItem("game-1-hasWon", hasWon);
}


// has Won
function setHasWon(newValue) {
  hasWon = newValue;
  saveStorageHasWon(hasWon);
  updateView();       // refresh view
}

// Remaining changes
function setRemainingChance(newValue) {
  remainingChances = newValue;
  saveStorageChances();
  updateView();     // refresh view
}

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

function showGame() {
  hide(lostView);
  hide(wonView);
  show(passwordView);
}

function showWin() {
  hide(passwordView);
  hide(lostView);
  show(wonView);
}
function showLost() {
  hide(passwordView);
  hide(wonView);
  show(lostView);
}

function handleEnterPasserord(e) {
  if (e.key === "Enter") {
    handleCheck();
  }
}

function handleCheck() {
  const passwordEntered = passwordInput.value;
  passwordInput.value = "";

  if (passwordEntered == SECRET_CODE) {
    setHasWon(true);
    showWin();

  } else {
    setRemainingChance(remainingChances-1);

    if (remainingChances == 0) {
      hide(tryAgainButton);
    }

    showLost();
  }
}

// MAIN   ---------------------------------------------------------

// 1 - Get data from storage
var remainingChances = readStorageChances();
if (remainingChances == null) {
  setRemainingChance(3);      // By default 3 chances
}

var hasWon = readStorageHasWon();
if (hasWon == null) {
  setHasWon(false);           // By default player has not won
}

// 2 - Update the view
updateView();
