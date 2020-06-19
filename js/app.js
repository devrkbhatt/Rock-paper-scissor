// import ids aand classes
const click = document.querySelectorAll(".hdd");
// reset
const resett = document.getElementById("reset");
// get score update
const s_com = document.querySelector(".c");
const s_player = document.querySelector(".p");

// score
var p = document.querySelector(".p-score");
var c = document.querySelector(".c-score");

// import modal body

const modal = document.querySelector(".modal-content");

score = {
  com: 0,
  pla: 0,
};

//

// functions
// get computer text
function getRandom() {
  var arr = ["rock", "paper", "scissor"];
  var random = Math.floor(Math.random() * 3);
  return arr[random].toLowerCase();
}

function ChooseWinner(p, c) {
  if (c === p) return 0;
  else if (p === "rock") {
    if (c === "scissor") return 1;
    else return -1;
  } else if (p === "paper") {
    if (c === "scissor") return -1;
    else return 1;
  } else if (p === "scissor") {
    if (c === "rock") return -1;
    else return 1;
  }
}

// update Modal

function updateModal(win, computer_choice) {
  var text = document.querySelector(".status");
  var com_choose_text = document.querySelector(".computer-choose");
  //   final = document.querySelector(".result-icon");

  //   console.log(computer_choice);
  //   com_choose_text.textContent = "computer_choice";
  if (win == 0) {
    text.innerHTML = "DROW";
    text.style.color = "black";
  } else if (win == 1) {
    text.innerHTML = "YOU WON";
    text.style.color = "Green";
    // uupdate score
    p.innerHTML = ++score.pla;
  } else if (win == -1) {
    text.innerHTML = "YOU LOOSE";
    text.style.color = "RED";
    c.innerHTML = ++score.com;
  } else {
    console.log("do nothing");
  }
  com_choose_text.innerHTML = "Computer Choose" + " : " + computer_choice;
  // update the final icon
  //   final.innerHTML = final_icon;
}

function resetScore() {
  score.pla = 0;
  score.com = 0;
  p.innerHTML = score.pla;
  c.innerHTML = score.com;
}

function game(e) {
  player_choice = e.target.id.toLowerCase();

  // computer choice
  var computer_choice = getRandom();

  // get winner
  var winner = ChooseWinner(player_choice, computer_choice);
  // update modal show winner
  var modal = updateModal(winner, computer_choice);
  //show reset button
  resett.classList += "rst";
  //   reset score
  //   resetScore();

  //   console.log(player_choice, computer_choice);
  console.log("my choice", player_choice);
  console.log("computer", computer_choice);
  console.log(winner);
}

// event lisner

for (value of click) {
  value.addEventListener("click", game);
}
// add evenn lister to reset

resett.addEventListener("click", resetScore);