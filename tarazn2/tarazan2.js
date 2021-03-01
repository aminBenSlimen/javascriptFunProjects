var canvas = document.querySelector("canvas");
canvas.width =window.innerWidth;
canvas.height =window.innerHeight;
var c =canvas.getContext("2d");
let engine,world;
var myGuy,bigBox;
function setUp(){
     engine = Matter.Engine.create();
     world = engine.world;
     myGuy = new box(200,0,50,50,false);
     bigBox = new box(0,250,500,200,false);
     ground = new box(0,(innerHeight-50),innerWidth,20,true);
}
function draw(){
    c.clearRect(0,0,innerHeight,innerWidth)
    Matter.Engine.update(engine);
    ground.show()
    bigBox.show()
    myGuy.show()
    requestAnimationFrame(draw)
}
setUp()
draw()


