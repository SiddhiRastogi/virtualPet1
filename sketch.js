//Create variables here
 var dog,happyDog;
 var database;
 var foodS,foodStock

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dog1Img = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1000,600);
  database = firebase.database();
  dog = createSprite(500,400,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock)
  console.log(foodStock)
}


function draw() { 
  background(46,139,87) 
  dog.display();
  drawSprites();
  //add styles here
 
  textSize(20);
  fill("black");
  text("Food Remaining :"+foodS , 100,100)

  if(keyWentDown(UP_ARROW)){
    foodS = foodS - 1;
   writeStock(foodS);
   dog.addImage(dog1Img);
  }
}

function readStock(data){
foodS = data.val(); 
console.log(foodS);
}

function writeStock(foodS){
  database.ref('/').update({
    'food':foodS
  });
}

