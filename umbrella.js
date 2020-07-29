class Umbrella{
    constructor(x,y,width,height){
      var options={
          'restitution':0
      }
        this.body = Bodies.circle(x,y,this.width,this.Bodiesheight,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("batboy.png");
        World.add(world,this.body);
    }
    display(){
   imageMode(CENTER);
   image(this.image,0,0);
    }
}