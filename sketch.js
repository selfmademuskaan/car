function setup() {
  createCanvas(800,400);
  p1=createSprite(750, 50, 10, 50);
  p1.shapeColor="brown";
  p2=createSprite(750, 150, 10, 50);
  p2.shapeColor="brown";
  p3=createSprite(750, 250, 10, 50);
  p3.shapeColor="brown";
  p4=createSprite(750, 350, 10, 50);
  p4.shapeColor="brown";

  b1=createSprite(50, 50, 10, 10);
  b1.velocityX=4;
  b1.collide(p1);
  b2=createSprite(50, 150, 10, 10);
  b2.velocityX=7;
  b2.collide(p2);
  b3=createSprite(50, 250, 10, 10);
  b3.velocityX=5;
  b3.collide(p3);
  b4=createSprite(50, 350, 10, 10);
  b4.velocityX=6;
  b4.collide(p4);

}

function draw() {
  background("black"); 
  
  if (b1.collide(p1)) {
    b1.shapeColor="red";
  }

  if (b2.collide(p2)) {
    b2.shapeColor="green";
  }

  if (b3.collide(p3)) {
    b3.shapeColor="blue";
  }

  if (b4.collide(p4)) {
    b4.shapeColor="yellow";
  }
  
  drawSprites();
}