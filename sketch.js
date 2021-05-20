var monkey;
var monkeyImage;
var life00,life01,life10,life11,
  rocket,
  rocketImage,
  bird,
  balloon,rocket1,
  bird1,
  balloon1,
  birdImage,
  balloonImage;
var FoodGroup, obstacleGroup;
var days, hours, months, years;
var gamestate = "start";
var w,x,y,z;
var ground;
var forest, farest;
var LXG, LX2G, LYG, LY2G, RG, R2G, BAG, BA2G, BIG, BI2G;
var hunger = 20;
var GO, GOI;
var lives;
var maxlives;
var score;
var bg;
function preload() {
  //loading Images
    monkeyImage = loadImage("skydiver.png");
    lifeImage = loadImage("heart.png");
    rocketImage = loadImage("lolllir.png");
    balloonImage = loadImage("balloonnn.png");
    birdImage = loadImage("bird.png");
    GOI = loadImage("GOver.webp")
    bg = loadImage("bg18.1.jpeg")

}
function setup() {
  //randm variable for control
  x = 2;
  y = 2;
  z = 2;
//starting number of lives
lives = 3;
maxlives = 20;
score = 0;
  //basic stuff
  createCanvas(775, 651);
//creating groups
  LXG = createGroup();
  LX2G = createGroup();
  LYG = createGroup();
  LY2G = createGroup();
  RG = createGroup();
  R2G = createGroup();
  BAG = createGroup();
  BA2G = createGroup();
  BIG = createGroup();
  BI2G = createGroup();

//main sprite
  monkey = createSprite(width/2,height/2,10,10);

  monkey.addImage(monkeyImage);
  monkey.scale = 0.1;

}
function draw() {
  //another random variable for control
  w = frameCount + 1000;
//making it harder

 maxlives = 0 - score/100;
 maxlives = maxlives + 20;
 if(maxlives<1){
  maxlives = 1;
}

if(lives>maxlives){
  lives = maxlives;
}
if(maxlives === 1){
  if(frameCount%10 === 0){
  Rockets();
  Rockets1();
  Birds1();
  Birds();
  Balloons();
  Balloons1();
}
}
  //spawning in
  
if(frameCount%60 === 0){
  if(x%2 === 0){
  Rockets();
  x = x + 1;
  }else{
  Rockets1();
  x = x + 1;
  }
}
if(frameCount%20 === 0){
  if(y%2 === 0){
  Birds();
  y = y + 1;
  }else{
  Birds1();
  y = y + 1;
  }
}
if(w%500 === 0){
  LivesX();
}
if(frameCount%500 === 0){
  LivesY();
}
if(frameCount%50 === 0){
  if(z%2 === 0){
  Balloons();
  z = z + 1;
  }else{
  Balloons1();
  z = z + 1;
  }
}
//Destoying lives
if(monkey.isTouching(RG)){
  RG.destroyEach();
  lives = lives-5; 
  if(lives<1){
    gamestate = "end";
  }
}
if(monkey.isTouching(R2G)){
  R2G.destroyEach();
  lives = lives-5; 
 if(lives<1){
    gamestate = "end";
  }
}

if(monkey.isTouching(LXG)){
  LXG.destroyEach();
  lives = lives+1; 
}
if(monkey.isTouching(LX2G)){
  LX2G.destroyEach();
  lives = lives+1; 
}

if(monkey.isTouching(BAG)){
  BAG.destroyEach();
  lives = lives-2; 
 if(lives<1){
    gamestate = "end";
  }
}
if(monkey.isTouching(BA2G)){
  BA2G.destroyEach();
  lives = lives-2; 
  if(lives<1){
    gamestate = "end";
  }
}

if(monkey.isTouching(BIG)){
  BIG.destroyEach();
  lives = lives-1; 
  if(lives<1){
    gamestate = "end";
  }
}
if(monkey.isTouching(BI2G)){
  BI2G.destroyEach();
  lives = lives-1; 
  if(lives<1){
    gamestate = "end";
  }
}

if(monkey.isTouching(LYG)){
  LYG.destroyEach();
  lives = lives+1; 
}
if(monkey.isTouching(LY2G)){
  LY2G.destroyEach();
  lives = lives+1; 
}

//background stuff
  background(bg);
//movement
if(keyIsDown(37)){
  monkey.x = monkey.x-5;
}
if(keyIsDown(39)){
  monkey.x = monkey.x+5;
}
if(keyIsDown(38)){
  monkey.y = monkey.y-5;
}
if(keyIsDown(40)){
  monkey.y = monkey.y+5;
}
//restrictions
if(monkey.x>width-5){
monkey.x = width-5;
}
if(monkey.x<5){
monkey.x = 5;
}
if(monkey.y>height-5){
  lives = 0;
gamestate = "end";
}
if(monkey.y<5){
monkey.y = 5;
}
//ending the game
if(lives === 0){
  gamestate = "end";
}
if(lives < 1){
  gamestate = "end";
}
  if (gamestate === "end") {
    GO = createSprite(width/2, height/2);

    GO.addImage(GOI);
    GO.scale = 1.35;
    LYG.destroyEach();
    LY2G.destroyEach();
    LXG.destroyEach();
    LX2G.destroyEach();
    RG.destroyEach();
    R2G.destroyEach();
    BAG.destroyEach();
    BA2G.destroyEach();
    BIG.destroyEach();
    BI2G.destroyEach();
frameCount = 0;
    }
  drawSprites();
  fill(255,255,255);
  text("Score: " + score,width-100,30);
  console.log(maxlives);
}






//spawning in obstacles and powerups
function LivesX(){
  life00 = createSprite(random(1,2),random(height/2,height),10,10);
  life00.x = Math.round(life00.x);
  if(life00.x === 1){
  life00.x = -100;
  life00.velocityX = random(2,4);
  }else{
  life00.x = width + 100;
  life00.velocityX = random(-2,-4);
  }
  life00.addImage(lifeImage);
  life00.lifetime = 500;
  life00.scale = 0.05;
  life00.velocityY = random(-2,-4);
  LXG.add(life00);
}
function LivesY(){
  life01 = createSprite(random(0,width),height+10,10,10);
  life01.addImage(lifeImage);
  life01.lifetime = 500;
  life01.scale = 0.05;
  life01.velocityY = random(-2,-4);
  LYG.add(life01);
}
function Rockets(){
  rocket = createSprite(random(0,width),height+10,10,10);
  rocket.addImage(rocketImage);
  rocket.lifetime = 100;
  rocket.scale = 0.2;
  rocket.velocityY = random(-10,-20);
  RG.add(rocket);
  score = score + 1;
}
function Balloons(){
  balloon = createSprite(random(0,width),height+10,10,10);
  balloon.addImage(balloonImage);
  balloon.lifetime = 800;
  balloon.scale = 0.02;
  balloon.velocityY = random(-1,-4);
  balloon.velocityX = random(-1,1);
  BAG.add(balloon);
  score = score + 1;
}
function Birds(){
  bird = createSprite(random(1,2),random(height/2,height),10,10);
  bird.addImage(birdImage);
  bird.x = Math.round(bird.x);
  if(bird.x === 1){
  bird.x = -100;
  bird.velocityX = random(1,3);
  }else{
  bird.x = width + 100;
  bird.velocityX = random(-1,-3);
  }  
  bird.lifetime = 700;
  bird.scale = 0.02;
  bird.velocityY = random(-1,-2);
  BIG.add(bird);
  score = score + 1;
}





//secondary obstacles to prevent mass murdering of obstacles when monkey hits obstacles
function Rockets1(){
  rocket1 = createSprite(random(0,width),height+100,10,10);
  rocket1.addImage(rocketImage);
  rocket1.lifetime = 100;
  rocket1.scale = 0.2;
  rocket1.velocityY = random(-10,-20);
  R2G.add(rocket1);
  score = score + 1;
}
function Balloons1(){
  balloon1 = createSprite(random(0,width),height+100,10,10);
  balloon1.addImage(balloonImage);
  balloon1.lifetime = 800;
  balloon1.scale = 0.02;
  balloon1.velocityY = random(-1,-4);
  balloon1.velocityX = random(-1,1);
  BA2G.add(balloon1);
  score = score + 1;
}
function Birds1(){
  bird1 = createSprite(random(1,2),random(height/2,height),10,10);
  bird1.addImage(birdImage);
  bird1.x = Math.round(bird1.x);
  if(bird1.x === 1){
  bird1.x = -100;
  bird1.velocityX = random(1,3);
  }else{
  bird1.x = width + 100;
  bird1.velocityX = random(-1,-3);
  }  
  bird1.lifetime = 700;
  bird1.scale = 0.02;
  bird1.velocityY = random(-1,-2);
  BI2G.add(bird1);
  score = score + 1;
}
