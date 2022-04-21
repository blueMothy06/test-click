//virtual camera
//move the mouse around
//the sprite follows the mouse but appears at the center of the sketch
//because the camera is following it
let myCanvas;

// img
let bg;
let clickImg;


let message = '';

// button
var clickDoor;

function preload() {
  bg = loadImage('bg.png');
}

function setup() {
  myCanvas = createCanvas(800, 750);
  myCanvas.parent('myCanvas');
  background(bg);

  clickDoor = new Clickable();
  clickDoor.image = clickImg;
  clickDoor.locate(330, 120);
  clickDoor.resize(180, 440);
  clickDoor.text = "Click me!";
  clickDoor.cornerRadius = 0;       //Corner radius of the clickable (float)
  clickDoor.strokeWeight = 0;

  clickDoor.onHover = function() {
    clickDoor.text = "what do you think is behind this?";
  }

  clickDoor.onOutside = function() {
    message = 'What should I look at?';
  }

  clickDoor.onPress = function() {
    clickDoor.text = "surprise there's nothing at all!";
  }

}

function draw() {
  background(bg);
  clickDoor.draw();

}
