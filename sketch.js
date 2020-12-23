var dog,database,foodS,foodStock;

var happyDog_img,dog_img;



function preload()
{
  
  happyDog_img=loadImage("images/dogImg.png")
  dog_img=loadImage("images/dogImg1.png")


}

function setup() {
  createCanvas(500,500);
  
  dog=createSprite(250,300,20,20);
  dog.addImage(dog_img);
  dog.scale=0.15;
  
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);


if(keyWentDown(UP_ARROW)){
     
  writeStock(foodS);

  dog.addImage(happyDog_img)
  


}


  drawSprites();
  //add styles here

 
  fill("red");
  textSize(15);
  stroke(10);
  text("PRESS UP ARROW KEY TO FEED TOM MILK",100,100);

} 

function readStock(data){

foodS=data.val();


}

function writeStock(x){

   if(x<=0){
   x=0
   
   }else{
   
  x=x-1

  }

  database.ref('/').update({
   food:x

  })
  
  
  }


