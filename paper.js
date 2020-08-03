class paper {
    constructor(x,y,radius){
  var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }     
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.body = Bodies.circle(x,y,radius-30,options);
  this.image = loadImage("paper.png");
  
  World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
     //ellipseMode(CENTER);
      fill(255);
     // circle(0,0,this.radius);
      imageMode(CENTER);
      image(this.image,0,0,this.radius+30,this.radius+30);
      
      pop();
    }
  };