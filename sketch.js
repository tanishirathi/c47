var frect,mrect ;
var jungle;
var mowgli;
var score;
var score = 0;
var grpZebra;
var grpLepord;
var grpRhino;
var grpTiger;
var gameState = "play";

function preload (){
   jungle = loadImage ("Forest3.jpg")
  // mowgli = loadAnimation ("walking mowgli.png")
   tiger  = loadImage ("tiger1.png")
   zebra = loadImage ("zebra1.png")
   rhino = loadImage ("rhino1.png")
   lepord = loadImage ("lepord2.png")
   }

function setup() { 
createCanvas(displayWidth-50,displayHeight-150);
jungle1 = createSprite(displayWidth/2,displayHeight/2-100,10,10)
jungle1.addImage(jungle)
jungle1.scale = 0.3;

mowgli1 = createSprite (50,displayHeight-300,10,50) 
//mowgli1.addAnimation("running",mowgli);

invisiableGround = createSprite(displayWidth/2,displayHeight-200,-displayWidth,5)
invisiableGround.visible = false;
grpTiger = new Group ();
grpZebra = new Group ();
grpRhino = new Group ();
grpLepord = new Group ();
}

function draw() {
background(0);
if (gameState === "play"){
jungle1.velocityX=-2

if(jungle1.x<600){
jungle1.x=displayWidth/2;
}
if(frameCount % 60 === 0 ){
var rand=Math.round(random (1,4))
if(rand === 1){
spawnTiger();
}
else if(rand === 2){
spawnZebra();
}
else if (rand === 3){
   spawnRhino();
}
else {
spawnLepord();
}
}
if(keyDown("space")){
mowgli1.velocityY = -12;
}
if(grpZebra.isTouching(mowgli1)){
score = score+3;
}
if(grpRhino.isTouching(mowgli1)){
score = score+5;
}
if(grpTiger.isTouching(mowgli1)){
score = score+7;
}
if(grpLepord.isTouching(mowgli1)){
score = score+10;
}
mowgli1.velocityY = mowgli1.velocityY+1;

if(grpTiger.x<0||grpLepord.x<0||grpRhino.x<0||grpZebra.x<0){
gameState ="end";
}
mowgli1.collide(invisiableGround);
drawSprites() 
stroke("white");
text("SCORE :"+score,displayWidth-200,50);
}

if (gameState === "end"){
   stroke("white");
   text("GAME OVER ",displayWidth/2,displayHeight/2);
}

}


function spawnTiger(){
   if(frameCount % 60 === 0 ){
   var Animal1 = createSprite (displayWidth,displayHeight-250,10,40);
   Animal1.velocityX=-10
   Animal1.addImage(tiger);
   Animal1.scale=0.5;
   grpTiger.add(Animal1);
   }
   }

   function spawnZebra(){
   if(frameCount % 60 === 0 ){
   var Animal2 = createSprite (displayWidth,displayHeight-250,10,40);
   Animal2.velocityX=-10
   Animal2.addImage(zebra);
   Animal2.scale=0.5;
   grpZebra.add(Animal2);
   }
   }

   function spawnRhino(){
   if(frameCount % 60 === 0 ){
   var Animal3 = createSprite (displayWidth,displayHeight-250,10,40);
   Animal3.velocityX=-10
   Animal3.addImage(rhino);
   Animal3.scale=0.5;
   grpRhino.add(Animal3);
   }
   }

   function spawnLepord(){
   if(frameCount % 60 === 0 ){
   var Animal4 = createSprite (displayWidth,displayHeight-250,10,40);
   Animal4.velocityX=-10
   Animal4.addImage(lepord);
   Animal4.scale=0.5;
   grpLepord.add(Animal4);
   }
   }


