
var r = 10;
var g = 50;
var b=255;

var ball;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);

  ball = createSprite(600,200,45,45);
  ball.shapeColor = "orange";
}


function draw(){

  background(r,g,b);

  ball.x = mouseX;
  ball.y = mouseY;
  // change the value of Red based on the mouse movement about the X axis
  r = mouseX;

  // change the value of Green based on the mouse movement about the X axis
  g = mouseY;
  // change the value of Blue based on the mouse movement about the X axis
 b = mouseX;

  // Use the map() function to do so. 
 

  // Pass the values to the background() function you have learnt previously.

 
  
  
  drawSprites();
}