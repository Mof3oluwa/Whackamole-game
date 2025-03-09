let currMoleTile; // This would help us keep track of the mole
let currPlantTile; // This would help us keep track of the plant
let score = 0;
let gameOver = false;

window.onload = function() {
  setGame();
  
}

function setGame() {
  //set up the grid for the game board in html
  for(let i = 0; i < 9; i++) { //i goes from 0 to 9, stops at 8
    //<div id = "0-8"></div>
    let tile =document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile); 
    //we are taking the 9 tags we have created in javascript and we are accessing the tag with the id board and we are inserting them inside the div tag. at first you would not see anything but when i click on inspect it will show you the div tags.
}

  setInterval(setMole, 1000)// 1000 millisecond = 2 seconds, so for every 1 seconds this function is called and it sets a mole on a random tile
  setInterval(setPlant, 2000)// 2000 millisecond = 2 seconds, so for every 2 seconds this function is called
}

function getRandomTile(){
  // math.random returns a number between 0 and 1 and if i multiply this by 9 the range goes to 0 to 9 but it does not include 9, and if i rounded down with math.floor it would go from 0 to 8.
  let num = Math.floor(Math.random() * 9);
  return num.toString(); // returned a number as a string so we can use it for the id
}
function setMole() {
if(gameOver){
  return;
}
  if(currMoleTile){
    currMoleTile.innerHTML = ""; // it is going to clear all the tags within this div tag
  }
  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  let num = getRandomTile();
  if(currPlantTile && currPlantTile.id == num){
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {

if(gameOver){
  return;
}
  if(currPlantTile){
    currPlantTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";


  let num = getRandomTile();
  if(currMoleTile && currMoleTile.id == num){
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if(gameOver){
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString(); // update score
  }

  else if (this == currPlantTile) {
    document.getElementById("score").innerText = "GAME OVER: " + score.toString();
    gameOver = true;
  }
}
