var player , playerImg ;
var enemy , enemyImg , enemyGrp;
var bullet , bulletImg , bulletGrp;
var spaceImg , score;
var gameOverSound , shootSound ;


function preload() {
  
  spaceImg = loadImage("bg.jpg");
  playerImg = loadImage("player.png");
  enemyImg = loadImage("enemy.png");
  bulletImg = loadImage("Bullet (1).png");
  shootSound = loadSound("shoot.wav");
  gameOverSound = loadSound("gameOver.wav");
}

function setup(){
  createCanvas(500,600);

  player = createSprite(250,530,40,40);
  player.addImage("player",playerImg);
  player.scale=1.2;

  bulletGrp = new Group();
  enemyGrp = new Group();
  
  score=0;

}

function draw() {
  background(spaceImg); 
 

  if(keyDown("right_arrow") && player.x<499){
    player.x=player.x+5;
  }

  if(keyDown("left_arrow") && player.x>1){
    player.x=player.x-5;
  }

  if(keyDown("up_arrow")){
    spawnBullet();
    shootSound.play();
  }

  if(bulletGrp.isTouching(enemyGrp)){
    bullet.destroy();
    enemy.destroy()
    score = score + 5;
  }

  fill("white");
  textSize(20);
  text("Score :" + score ,400,550);

  spawnEnemy();
  drawSprites();
}

function spawnBullet(){
 bullet = createSprite(250,530,10,10);
 bullet.addImage("bullet",bulletImg);
 bullet.scale=0.25
 bullet.y=490;
 bullet.x=player.x;
 bullet.velocityY=-7;
 bullet.lifetime=500;
 bulletGrp.add(bullet);

}

function spawnEnemy(){
 if(frameCount%150 === 0){
 enemy = createSprite(250,10,40,40);
 enemy.addImage("enemy",enemyImg);
 enemy.scale=0.25
 enemy.x=Math.round(random(20,480));
 enemy.y=5;
 enemy.velocityY=1;
 enemyGrp.add(enemy);

 }
}