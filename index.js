//jshint esversion:6

const gameBoard = document.getElementById('gameBoard');
let turn = 'p1X';
const title = document.getElementById('title');
//tile ids
const tl = document.getElementById('tl');
const tm = document.getElementById('tm');
const tr = document.getElementById('tr');
const ml = document.getElementById('ml');
const mm = document.getElementById('mm');
const mr = document.getElementById('mr');
const bl = document.getElementById('bl');
const bm = document.getElementById('bm');
const br = document.getElementById('br');

gameBoard.addEventListener('click', monitorGame);

function monitorGame(e) {
  let clickedElem = document.getElementById(e.target.id);
  addLetter(clickedElem);
  checkForWin();
}

function addLetter(clickedElem) {
  if (turn === 'p1X') {
    if (!clickedElem.classList.contains('x') || !clickedElem.classList.contains('o')) {
      clickedElem.innerHTML = 'X';
      clickedElem.classList.add('x');
      turn = 'p2O';
      title.innerHTML = "Player Two's Turn (O)";
    }
  } else if (turn === 'p2O') {
    if (!clickedElem.classList.contains('x') || !clickedElem.classList.contains('o')) {
      clickedElem.innerHTML = 'O';
      clickedElem.classList.add('o');
      turn = 'p1X';
      title.innerHTML = "Player One's Turn (X)";
    }
  }
}

function checkForWin() {
  //turn switches after letter is added
  let checkFor;
  (turn === 'p1X') ? checkFor = 'o': checkFor = 'x';

  //horizontal
  if (tl.classList.contains(checkFor) && tm.classList.contains(checkFor) && tr.classList.contains(checkFor)) {
    tl.classList.add('win');
    tm.classList.add('win');
    tr.classList.add('win');
    displayWin();
  } else if (ml.classList.contains(checkFor) && mm.classList.contains(checkFor) && mr.classList.contains(checkFor)) {
    ml.classList.add('win');
    mm.classList.add('win');
    mr.classList.add('win');
    displayWin();
  } else if (bl.classList.contains(checkFor) && bm.classList.contains(checkFor) && br.classList.contains(checkFor)) {
    bl.classList.add('win');
    bm.classList.add('win');
    br.classList.add('win');
    displayWin();

    //vertical
  } else if (tl.classList.contains(checkFor) && ml.classList.contains(checkFor) && bl.classList.contains(checkFor)) {
    tl.classList.add('win');
    ml.classList.add('win');
    bl.classList.add('win');
    displayWin();
  } else if (tm.classList.contains(checkFor) && mm.classList.contains(checkFor) && bm.classList.contains(checkFor)) {
    tm.classList.add('win');
    mm.classList.add('win');
    bm.classList.add('win');
    displayWin();
  } else if (tr.classList.contains(checkFor) && mr.classList.contains(checkFor) && br.classList.contains(checkFor)) {
    tr.classList.add('win');
    mr.classList.add('win');
    br.classList.add('win');
    displayWin();

    //diagonal
  } else if (tl.classList.contains(checkFor) && mm.classList.contains(checkFor) && br.classList.contains(checkFor)) {
    tl.classList.add('win');
    mm.classList.add('win');
    br.classList.add('win');
    displayWin();
  } else if (tr.classList.contains(checkFor) && mm.classList.contains(checkFor) && bl.classList.contains(checkFor)) {
    tr.classList.add('win');
    mm.classList.add('win');
    bl.classList.add('win');
    displayWin();
  }
}

function displayWin() {
  gameBoard.removeEventListener('click', monitorGame);
  let winner;
  (turn === 'p1X') ? winner = 'Player 2': winner = 'Player 1';
  title.innerHTML = winner + " Wins! Click To Play Again.";
  title.addEventListener('click', function() {
    document.location.reload();
  });
}
