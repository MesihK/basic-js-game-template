// Collect The Square game

// Get a reference to the canvas DOM element
var canvas = document.getElementById('canvas');
// Get the canvas drawing context
var context = canvas.getContext('2d');

// FLags to track which keys are pressed
var down = false;
var up = false;
var right = false;
var left = false;
var space = false;
var enter = false;

// Listen for keydown events
canvas.addEventListener('keydown', function(event) {
  event.preventDefault();
  console.log(event.key, event.keyCode);
  if (event.keyCode === 40) { // DOWN
    down = true;
  }
  if (event.keyCode === 38) { // UP
    up = true;
  }
  if (event.keyCode === 37) { // LEFT
    left = true;
  }
  if (event.keyCode === 39) { // RIGHT
    right = true;
  }
  if (event.keyCode === 32) { // SPACE
    space = true;
  }
  if (event.keyCode === 13) { // ENTER
    enter = true;
  }
});

// Listen for keyup events
canvas.addEventListener('keyup', function(event) {
  event.preventDefault();
  console.log(event.key, event.keyCode);
  if (event.keyCode === 40) { // DOWN
    down = false;
  }
  if (event.keyCode === 38) { // UP
    up = false;
  }
  if (event.keyCode === 37) { // LEFT
    left = false;
  }
  if (event.keyCode === 39) { // RIGHT
    right = false;
  }
  if (event.keyCode === 32) { // SPACE
    space = false;
  }
  if (event.keyCode === 13) { // ENTER
    enter = false;
  }
});

// Start the game
function startGame() {
  draw();
}

// Clear the canvas
function erase() {
  context.fillStyle = '#FFFFFF';
  context.fillRect(0, 0, 600, 400);
}
//-----------------------------------------------------------------------------
//Change Only Here!!

function draw() {
  erase();
  // Draw a text
  context.fillStyle = '#000000';
  context.font = '24px Arial';
  context.textAlign = 'left';
  if(up) context.fillText('Up!', 10, 50);
  else if(down) context.fillText('Down!', 10, 50);
  else if(left) context.fillText('Left!', 10, 50);
  else if(right) context.fillText('Right!', 10, 50);
  else if(space) context.fillText('Space!', 10, 50);
  else if(enter) context.fillText('Enter!', 10, 50);
  else context.fillText('None!', 10, 50);

  // Draw a square
  context.fillStyle = '#FF0000';
  context.fillRect(100, 100, 20, 20); //x, y, lenght, height
  window.requestAnimationFrame(draw);
}

//Up to here!!
//-----------------------------------------------------------------------------

// Start the game
startGame();
canvas.focus();

