// Get the canvas element
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set the size of the canvas
canvas.width = 500;
canvas.height = 500;

// Set the initial position of the snake
var x = 250;
var y = 250;

// Set the initial direction of the snake
var xSpeed = 1;
var ySpeed = 0;

// Set the size of the snake
var size = 10;

// food object
var food = {
  x: 0,
  y: 0,
  size: 10,
  color: "red"
};

// Draw the snake on the canvas
function draw() {
  ctx.fillRect(x, y, size, size);
}

// Move the snake
function move() {
  x += xSpeed;
  y += ySpeed;
}

// Clear the canvas
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Generate a random position for the food
function generateFood() {
  food.x = Math.floor(Math.random() * (canvas.width - food.size));
  food.y = Math.floor(Math.random() * (canvas.height - food.size));
}

// Draw the food on the canvas
function drawFood() {
  ctx.fillStyle = food.color;
  ctx.fillRect(food.x, food.y, food.size, food.size);
}

// Check for collision between the snake and the food
function checkCollision() {
  if (x > food.x && x < food.x + food.size && y > food.y && y < food.y + food.size) {
    generateFood();
    size += 2;
  }
}

// manipulate the snake
document.onkeydown = function(event) {
  if(event.keyCode == 37 && xSpeed === 0) {
    xSpeed = -1;
    ySpeed = 0;
  } else if(event.keyCode == 38 && ySpeed === 0) {
    xSpeed = 0;
    ySpeed = -1;
  } else if(event.keyCode == 39 && xSpeed === 0) {
    xSpeed = 1;
    ySpeed = 0;
  } else if(event.keyCode == 40 && ySpeed === 0) {
    xSpeed = 0;
    ySpeed = 1;
  }
}

// Main game loop
function loop() {
  clear();
  move();
  draw();
  checkCollision();
  drawFood();
}

generateFood();
setInterval(loop, 100);
