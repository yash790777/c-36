var canvas;
var backgroundImage;
var database;
var form, player,game;


function preload() 
{
  backgroundImage = loadImage("assets/background.png");
}

function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game=new Game();
  game.start();
 

}

function draw() 
{
  background(backgroundImage);
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
