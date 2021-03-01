var canvas = document.querySelector("canvas");
canvas.height =(window.innerHeight);
canvas.width =(window.innerWidth);
var c =canvas.getContext("2d");
var tVector = {
    x : 50,
    y:-20,
},
pVector = {
    x : 0,
    y:0,
},
path = {
    x : 50,
    y : 50,

}
function update(){
    x = pVector.x + tVector.x,
    y = pVector.y + tVector.y;
    // pVector.x = Math.cos(angel)*200 + 500;
    // tVector.y = Math.sin(angel)*200 + 200;
    if( Math.sin(angel)<0){
        tVector.y = Math.sin(-angel)*200 + 200;
        
    }else{
		tVector.y = Math.sin(angel)*200 + 200;
	}
	if( Math.cos(angel)<0){
        tVector.x = Math.cos(-angel)*200 + 200;
        
    }else{
		tVector.x = Math.cos(angel)*200 + 200;
	}
    angel+=velo;
    path.x = x;
    path.y = y;
}
var angel  = 0;
x=50,
velo=0.02,
    y=50;
function draw(){
    update()
     c.clearRect(0,0,innerWidth,innerHeight)
     c.fillStyle="blue";
     c.beginPath();
     c.arc(x,y,50,0,(Math.PI)*2 ,true);
     c.fill();
     c.strokeStyle = "blue";
     c.lineWidth = 5;
     c.moveTo(580,50);
     c.lineTo(path.x,path.y);
     c.stroke();
    requestAnimationFrame(draw);
}
draw()