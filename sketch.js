var box;
function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,150,150);
  box.shapeColor="purple";
}

function draw() {
 // background(30);

//keydown verifica se a tecla foi pressionada
if (keyDown("up")){
  box.y = box.y -2;
}
if (keyDown("space")) {
  background("pink");
} else {
  background("blue");
}

drawSprites();
}





