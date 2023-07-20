var garden, rabbit;
var gardenImg, rabbitImg;
var lara
var apple
var red

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup() {

  createCanvas(400, 400);

  // mover o fundo
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

}
function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10)
  apple.addImage(appleImg)
  apple.scale = 0.07
  apple.velocityY = 3
  apple.lifetime = 150
}
function createOranges() {
  lara = createSprite(random(50, 350), 40, 10, 10)
  lara.addImage(appleImg)
  lara.scale = 0.07
  lara.velocityY = 3
  lara.lifetime = 150
}
function createRed() {
  red = createSprite(random(50, 350), 40, 10, 10)
  red.addImage(appleImg)
  red.scale = 0.07
  red.velocityY = 3
  red.lifetime = 150


}
if(FrameCount  % 80 == 0)
  var selec_sprites = Math.floor(random(1, 3))
  if (selec_sprites === 1) {
    createApples()
  }
  else if (selec_sprites === 2) {
    createOranges()
  }
  else if (selec_sprites === 3){
    createRed()
  }

rabbit.x = world.mouseX