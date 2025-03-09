Whack-a-Mole Game

Description

Whack-a-Mole is a simple interactive game where the player tries to click on a randomly appearing mole to gain points while avoiding clicking on a dangerous plant. If the player clicks on the plant, the game is over.

Features

A 3x3 game board

Randomly appearing moles and plants

Score tracking

Game over condition when clicking on the plant

Background and themed images

How to Play

Click on the moles as they appear on the board to score points.

Avoid clicking on the plants, as they will end the game.

The game continues until the player clicks on a plant.

Technologies Used

HTML: Structure of the game

CSS: Styling and layout

JavaScript: Game logic and interactions

Code Breakdown

HTML Structure

The game board consists of a <div> with an id of board.

The score is displayed in an <h2> tag with the id of score.

The script is linked through an external mole.js file.

<h1>Whack a Mole</h1>
<h2 id="score">0</h2>
<div id="board"></div>
<script src="mole.js"></script>

CSS Styling

The game uses a Mario-themed background.

The board is a 3x3 grid with soil and pipes.

Images (mole and plant) appear inside tiles.

#board {
  width: 540px;
  height: 540px;
  background: url("soil.png") cover;
  border: 3px solid white;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
}

#board div {
  width: 180px;
  height: 180px;
  background-image: url("pipe.png");
  background-size: cover;
}

JavaScript Logic

The game initializes by setting up the board and adding event listeners.

Moles and plants appear at random intervals.

Clicking on a mole increases the score; clicking on a plant ends the game.

let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 1000);
  setInterval(setPlant, 2000);
}

function selectTile() {
  if (gameOver) return;
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText = "GAME OVER: " + score.toString();
    gameOver = true;
  }
}

Setup Instructions

Download or clone the repository.

Ensure all image files (mario-bg.jpg, monty-mole.png, piranha-plant.png, soil.png, pipe.png) are in the same directory.

Open index.html in a browser.

Future Improvements

Add sound effects when clicking on moles or plants.

Implement a timer to make the game more challenging.

Introduce different difficulty levels with varying mole speeds.

Credits

Developed using HTML, CSS, and JavaScript.

