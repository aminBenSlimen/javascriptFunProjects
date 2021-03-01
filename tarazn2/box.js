class box {
    constructor(x,y,w,h,stat){
        this.w =w;
        this.h =h;
        this.body = Matter.Bodies.rectangle(x,y,this.w,this.h,{isStatic : stat});
        Matter.World.add(world,this.body)
        
    }
    show(){ 
        const ps = this.body.position;
        var angel = this.body.angle;
        this.body.frictionStatic =0
        c.save();
        c.translate((ps.x)+(this.w/2),(ps.y)+(this.h/2));
        c.rotate(angel)
        c.fillRect(0,0,this.w,this.h)
        c.restore()
    }
    
}