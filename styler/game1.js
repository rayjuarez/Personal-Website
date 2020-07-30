const CENTER_X = 250;
const CENTER_Y = 250;
const RADIUS = 25;


var canvas;
var ctx;


function initialize(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");


    drawSquare();
    drawSquare2();

}

function moveUp(){
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.restore();
  drawSquare2();
  ctx.translate(0, -(RADIUS /3));
  drawSquare();
}

function counterClockwise(){
  ctx.translate(-CENTER_X, -CENTER_Y);
  ctx.rotate( 2*Math.PI / 125);
  ctx.translate(CENTER_X, CENTER_Y);
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.restore();
  drawSquare2();
  drawSquare();

}

function rotateClockwise(){
  ctx.translate(CENTER_X, CENTER_Y);
  ctx.rotate(Math.PI / 125);
  ctx.translate(-CENTER_X, -CENTER_Y);
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.restore();
  drawSquare2();
  drawSquare();
}

function moveDown(){
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.restore();
  drawSquare2();
  ctx.translate(0, (RADIUS /3));
  drawSquare();

}

function drawSquare(){
  var x = event.screenX ;
  var y = event.screenY ;

    ctx.beginPath();
    ctx.rect(90, 45, 95, 55);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }

function drawSquare2(){
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.strokeStyle = "black";
  ctx.lineWidth = "9";
  ctx.strokeRect(255, 255, 125, 75);
  ctx.restore();
}

function mouseDown(button) {
  ctx.translate(CENTER_X, CENTER_Y);
  ctx.rotate(Math.PI / 125);
  ctx.translate(-CENTER_X, -CENTER_Y);
  ctx.restore();
  drawSquare();
}
