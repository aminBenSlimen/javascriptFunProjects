var canvas = document.querySelector("canvas");
canvas.height =(window.innerHeight);
canvas.width =(window.innerWidth);
var c =canvas.getContext("2d");
var x=150,
y=200,
i=0, 
dx=0,
score=0,
uCanAddScore = true,
fromCenter=150,
alpha=Math.PI,
beta=-(Math.PI)/2,
keypressed=false,
keydown = false,
guy = new Image(),
flor = new Image(),
smalFloor = new Image(),
xf=-750,
notWallYet=true,
pivot=150,
ynf=-30,
uCanMoveNow=false,
xnf;

    xnf=Math.random() * -330 -30

guy.src="stand.png"
flor.src="BIGfLOR.png"
smalFloor.src ="smalFloor.png"
function update(){
    
    window.addEventListener("keypress",function(key){
        keydown = true;
        switch(key.keyCode){
            case 81 : if(notWallYet){
                dx=-2;  
            }     
                break;
        }
       
    });
    i+=0.5;
    if(i%20== 0 && (keydown || uCanMoveNow )){
        guy.src="back1.png";
    }
    else if(i%10==0 &&(keydown || uCanMoveNow)){
        guy.src="back2.png";
    }
    x+=dx;
    if(x == -100 &&  keydown){
        notWallYet=false;
        dx=0;
        pivot+=2;
        xnf+=2;
    }
    window.addEventListener("keyup",function(key){
        keydown = false ;
        guy.src="stand.png";
        fromCenter = x;
        if(dx==-2 || dx == 0 && key.keyCode == 81){
            dx=0;
            keypressed = true;
            //x=Math.cos(alpha)*fromCenter;
            
        }
    });
    if(keypressed){
       x=(Math.cos(alpha)*(pivot-fromCenter))+pivot
       y=(Math.sin(beta)*(200-fromCenter)/2)+200+(200-fromCenter)/2
       beta-=0.06;
       alpha-=0.03;
       if(Math.cos(alpha) > 0.98){
            if(x>650+xnf && x<650+xnf+100){
                if(uCanAddScore){
                    score++
                    document.getElementById("score").innerHTML = score;
                    uCanAddScore = false
                }
                keypressed=false;
                setTimeout(restart,100)
            }else{
                notWallYet = true
                die();
            }
        
      }
    }
    if(x < pivot){
        done=true
    }else{
        done=false
    }
}
function hbal(){
    if(keypressed || dx==-2 || !notWallYet ){
        c.beginPath();
        c.lineWidth = 10;
        c.moveTo(pivot+130,360);
        c.lineTo(x+100,y+120);
        c.stroke();
        c.closePath();
    }
  
}
function restart(){
    if(x<650+xnf+100){
        uCanMoveNow = true
        x+=1;
        notWallYet = true
    }else{
        uCanMoveNow = false
        guy.src="stand.png"
        x-=5;
        xnf-=5;
        ynf=-50;
        y=200;
    }
    if(!done){
       requestAnimationFrame(restart);
      
    }else{
        uCanAddScore = true
        pivot = 150
        x=150
        y=200
        xnf=Math.random() * -330 -30
        xf=-750
        fromCenter=150,
        alpha=Math.PI,
        beta=-(Math.PI)/2
        keypressed=false
        keydown = false
        ynf=-30;
    }
}
function die(){
    keypressed= false;
        dx=0;
         y+=10;
         if(y<innerHeight){
             requestAnimationFrame(die)
         }else{
             location.reload();
         }
}

function draw(){
     c.clearRect(0,0,innerWidth,innerHeight);
     c.fillStyle="blue";
     c.beginPath();
     c.drawImage(smalFloor,xnf,ynf,1000,1100);
    c.drawImage(flor,xf+pivot,-50,1000,1100);
    hbal();
     c.drawImage(guy,x,y,250,200);
     update();
     
    requestAnimationFrame(draw);
}
draw();
