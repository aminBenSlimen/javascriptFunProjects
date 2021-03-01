var canvas=document.querySelector("canvas");
canvas.height=window.innerHeight-700;
canvas.width=window.innerWidth-500;

var c=canvas.getContext('2d');


var x=undefined,
    y=undefined,
    dx=undefined,
    dy=undefined,
    xr=undefined,
    yr=undefined,
    lenth=200;
    score = 0;
var mouse ={
    x:undefined,
};
var image = new Image();
image.src = "lava.png";
var coin = new Image();
coin.src = "coin.png";

 do{
            y=Math.random()*(canvas.height);    // random ball start
        }while(y>400 || y-30<0);
             do{
            x=Math.random()*(canvas.width); 
        }while(x+30>canvas.width);
            
            
            
            
if(Math.random() < 0.5){   // vitesse et direction
    dx=-5;
}else{
    dx=5;
}
dy=dx; // kifkif

        do{                                      // random position of food
          xr=Math.random()*(canvas.width);  
        }while(xr+100>canvas.width)
        do{
            yr=Math.random()*(canvas.height); 
        }while(yr>400)
            
            
window.addEventListener('mousemove',function(event){   // hover
    mouse.x = event.x;
})

  
function draw(){
    requestAnimationFrame(draw);
    //console.log(dx +" " + dy);
    
    c.clearRect(0,0,innerWidth,innerHeight);   // remise a zero invisible
    c.beginPath();                             //
     c.fillStyle = "dimgray";
    c.arc(x,y,20,0,(Math.PI)*2,false);         // dawira 
    c.strokeStyle = "black";                   // color
    c.fill();
   
    if(x > canvas.width-30 || x <30){  // idha ysar lfo9 w ymin l bar
        dx=-dx;
    }                                      // tglb
      if(y <30){
        dy=-dy;
    }
    
    
    if(y>canvas.height - 20){            // idha tmes lota
        died()
        draw.stop();                        // tmot
    }
    c.drawImage(coin,xr,yr,100,100); // l moraba3
    c.fillStyle = "white";// torsom l food  
    //
    if(mouse.x < 300){
        c.fillRect(0,650,lenth,50);
    }
    else if(mouse.x+lenth > canvas.width+300){
        c.fillRect(canvas.width-lenth,650,lenth,50);
    }else{
        c.fillRect(mouse.x-300,650,lenth,50);
    }
    //c.fillRect(mouse.x-300,650,lenth,50);  // torsom l panel w 7ododha
    c.drawImage(image,0,720,canvas.width,160); // lava
    
    if((x+30 > mouse.x-300 && y>650 )&& (x-30< mouse.x-300+lenth && y>650 )){
        dx=-dx;
    } 
    
    else if(y+30>650 && x<mouse.x-300+lenth && x>mouse.x-300){   
                                             // bounce normal
        if(dx>0 && x<mouse.x-300+(lenth/4)){
            dx=-dx;
        }
         else if(dx<0 && x>mouse.x-300+(lenth-lenth/4)){
            dx=-dx;
        }
        dy=-dy;
    }
    
    
    
    if((x-30 < xr+100 && x+30 > xr)&& (y+30>yr+5 && y-30< yr+95) ){ // ymin w ysar
      makeNewRect();
  
    }
    
    
    
    else if((y+30>yr+5 && y-30<yr+95)&&(x-30>xr && x-30<xr+100)){   // fo9 w lota
            makeNewRect();

    }
    
    
    
    else if((x-30 < xr+100 && x+30 > xr)&& (y+30>yr && y-30< yr+100)){         // coinette
        makeNewRect() ;
    }
 
    x+=dx;           // l vittsse w reaction fel position
    y+=dy;
   document.getElementById("score").innerHTML = score ;
    
      //  console.log(mouse.x);

}
draw();
function died(){
    alert("wanna play again?");
    location.reload();
                                // ki tmot te9ef     // affichage mta3 lose
}
function makeNewRect (){
     score ++; 
        dy=(-dy+1);
        dx=-(dx+1);
        do{
          xr=Math.random()*(canvas.width);  
        }while(xr+100>canvas.width)
        do{    
            yr=Math.random()*(canvas.height); 
        }while(yr>400)
          
}
       
