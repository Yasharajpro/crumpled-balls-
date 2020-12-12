class Dustbin{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.dwidth=200;
        this.dheight=150;
        this.wthick=20;
        this.image=loadImage("dustbingreen.png")
        this.bbody=Bodies.rectangle(this.x,this.y,this.dwidth,this.wthick,{isStatic: true});
        World.add(world,this.bbody);
        this.lbody=Bodies.rectangle(this.x-this.dwidth/2,this.y-this.dheight/2,this.wthick,this.dheight,{isStatic:true});
        World.add(world,this.lbody);
        this.rbody=Bodies.rectangle(this.x+this.dwidth/2,this.y-this.dheight/2,this.wthick,this.dheight,{isStatic:true});
        World.add(world,this.rbody)
        
    }
    display(){
      imageMode(CENTER);
      fill("white");
      image(this.image,this.bbody.position.x,this.bbody.position.y-this.dheight/2,this.dwidth,this.dheight)
      //rect(this.lbody.position.x,this.lbody.position.y,this.wthick,this.dheight)
     // rect(this.rbody.position.x,this.rbody.position.y,this.wthick,this.dheight)
    }



}