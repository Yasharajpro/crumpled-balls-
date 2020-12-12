class ground
{
    constructor(x,y,width,height){

      
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(this.x,this.y,this.width,this.height);
        

    }

}