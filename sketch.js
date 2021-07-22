var astronaut, astronautIMG;
var iss, issIMG;
var bath, bathIMG;
var brush, brushIMG;
var drink, drinkIMG;
var eat, eatIMG;
var gym1, gym1IMG, gym2, gym2IMG;
var sleep, sleepIMG;
var mainSound;

function preload() {
  astronautIMG = loadAnimation("move1.png", "move2.png");
  issIMG = loadImage("iss.png");
  bathIMG = loadAnimation("bath1.png", "bath2.png");
  brushIMG = loadAnimation("brush.png");
  drinkIMG = loadAnimation("drink1.png", "drink2.png");
  gym1IMG = loadAnimation("gym1.png", "gym2.png");
  gym2IMG = loadAnimation("gym11.png", "gym12.png");
  sleepIMG = loadAnimation("sleep.png");
  eatIMG = loadAnimation("eat1.png", "eat2.png");
  mainSound = loadSound("mainAUD.mp3");
}

function setup() {
  createCanvas(800, 400);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issIMG);
  iss.scale = 0.165;

  astronaut = createSprite(400, 250);
  astronaut.addAnimation("floating", astronautIMG);
  astronaut.scale = 0.1;
  mainSound.play();

}

function draw() {
  background(255, 255, 255);

  if (keyWentDown("B")) {
    astronaut.addAnimation("bathing", bathIMG);
    astronaut.changeAnimation("bathing");
    astronaut.y = 265;
  }

  if (keyWentDown("Q")) {
    astronaut.addAnimation("brushing", brushIMG);
    astronaut.changeAnimation("brushing");
    astronaut.y = 265;
  }

  if (keyWentDown("D")) {
    astronaut.addAnimation("drinkWater", drinkIMG);
    astronaut.changeAnimation("drinkWater");
    astronaut.y = 265;
  }

  if (keyWentDown("space")) {
    astronaut.addAnimation("exercise", gym2IMG);
    astronaut.changeAnimation("exercise");
    astronaut.y = 265;
  }

  if (keyWentDown("S")) {
    astronaut.addAnimation("sleep", sleepIMG);
    astronaut.changeAnimation("sleep");
    astronaut.y = 265;
  }

  if (keyWentDown("E")) {
    astronaut.addAnimation("eatFood", eatIMG);
    astronaut.changeAnimation("eatFood");
    astronaut.y = 265;
  }

  if (keyWentDown("R")) {
    astronaut.addAnimation("running", gym1IMG);
    astronaut.changeAnimation("running");
    astronaut.y = 265;
  }

  drawSprites();

  textSize(30);
  fill("red");
  text("Instructions:", 10, 30);

  textSize(20);
  fill("violet");
  text("B = Bathing", 10, 60);

  textSize(20);
  fill("lightGreen");
  text("Q = Brushing", 10, 90);

  textSize(20);
  fill("yellow");
  text("D = Drink Water", 10, 120);

  textSize(20);
  fill("purple");
  text("Space = Exercise", 10, 150);

  textSize(20);
  fill("pink");
  text("S = Sleep", 10, 180);

  textSize(20);
  fill("blue");
  text("E = Eat food", 10, 210);

  textSize(20);
  fill("orange");
  text("R = Run", 10, 240);
}