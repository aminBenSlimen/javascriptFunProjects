var canvas = document.querySelector("canvas");
canvas.height =(window.innerHeight);
canvas.width =(window.innerWidth);
var c =canvas.getContext("2d");
var angel=0,
place=500,
fromCenter =50,
    hover={
        herx:500,
        hery:500,
    };
    var
    x,colors=[
            "#F52549",
            "#FA6775",
            "#FFD64D",
            "#9BC01C",
            "#CB0000",
            "#E4FA0C",
            "#DDBC00",
            "#4D648D",
        ],y;
  
function draw(){
    // window.addEventListener('mousemove',function(mouse){
    //     hover.herx = mouse.x;
    //     hover.hery = mouse.y;
    // });
   // x=Math.cos(angel)*fromCenter+place,
    y=Math.abs(Math.sin(angel))*fromCenter+place;
    angel+=.04;
    c.fillStyle ='rgba(255,255,255,0.09)';
c.fillRect(0,0,innerWidth,innerHeight,0);

c.fillStyle="blue";
// for(var i=0;i<5;i++){
     c.beginPath();
//     fromCenter = Math.random()*88+50
     c.arc(x,y,5,0,(Math.PI)*2 ,true);
     c.fill();
// }

    requestAnimationFrame(draw);
}
draw()