class Dustbin{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1.0,
            density:1.2
          }      
        this.bottomBody = Bodies.rectangle(x,y+60,180,20,options);
        World.add(world,this.bottomBody);
        this.leftBody = Bodies.rectangle(x-80,y-60,20,220,options);
        World.add(world,this.leftBody);
        this.rightBody = Bodies.rectangle(x+80,y-60,20,220,options);
        World.add(world,this.rightBody);
        this.image = loadImage("dustbingreen.png");
       
}

display() {
    var pos1= this.leftBody.position;
    var pos2= this.rightBody.position;
    var pos3= this.bottomBody.position;
    rectMode(CENTER);
    fill(255,0,0);
    rect(pos3.x,pos3.y+5,180,20);
    rect(pos1.x,pos1.y+5,20,220);
    rect(pos2.x,pos2.y+5,20,220);
    imageMode(CENTER);
    image(this.image,pos3.x,pos1.y+20,200,250);
}
}