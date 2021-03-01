var canvas = document.querySelector("canvas");
canvas.height =(window.innerHeight)-110;
canvas.width =(window.innerWidth)-720;
var c =canvas.getContext("2d");
var colors=[
    "#F52549",
    "#FA6775",
    "#FFD64D",
    "#9BC01C",
    "#CB0000",
    "#E4FA0C",
    "#DDBC00",
    "#4D648D",
];
var speed=225,
    score=0,
    x=400,
    y=400,
    justTheFirstOne=true,
    arrX=[],
    xfood=500,
    yfood=300,
    arrY=[],
    dxV=[],
    dyV=[] ,
    dx=0,
    dy=0;
function draw(){   
    document.getElementById("score").innerHTML="score : " + score;
    //start position
c.clearRect(0,0,innerWidth,innerHeight); 
c.beginPath();
     if(y<0 || y>960 || x<0 || x >1400 || massFdhil()){
        die();
    }
    put();
c.fillStyle="green";
c.fillRect(x,y,30,30);
c.fill();
    // if food
ifFood();
    c.beginPath();
    c.fillStyle="black";
    c.arc(xfood,yfood,10,0,(Math.PI)*2,false);
    c.fill();
    // dhill draw
    for(var i=0;i<arrX.length;i++){
        c.fillStyle=colors[i] ;
        color();
        c.fillRect(arrX[i],arrY[i],30,30);
        arrX[i]+=dxV[i] ;
        arrY[i]+=dyV[i] ;
    }
    // if dort
 
        for(var h=0;h<arrX.length;h++){
                if(h== (arrX.length)-1){
                   dxV[h]=dx;
                dyV[h]=dy;  
                }else{
                    dxV[h]=dxV[h+1];
                     dyV[h]=dyV[h+1];
                }
        }

      
    x+=dx;
   y+=dy;
    
setTimeout(function(){requestAnimationFrame(draw);},speed);
  
}
draw();

function color(){
    colors.push(colors[Math.round((Math.random())*8)]);
}
function put(){
    window.addEventListener("keypress",function(key){
    switch(key.keyCode){
        case 90 :if(dy!=30)
                    {dy=-30;
                      dx=0;
                    }
            break;
        case 81 : if(dx!=30)
                     {dy=0;
                       dx=-30;
                     }
            break;
        case 83 : if(dy!=-30) 
                     {dy=30;
                      dx=0;
                     }
            break;
        case 68 : if(dx!=-30){ 
                      dy=0;
                      dx=30;
                     }
            break;
    }     
});
}
function ifFood(){
    if(x+30 > xfood && y+30 > yfood && x<xfood && y < yfood){ // food eating
        score++;
         if(score % 7 ==0 && score!=0){
       speed-=3;
   } 
        if(justTheFirstOne){
                justTheFirstOne = false;
             if(dx>0 && dy == 0){ //ymin
        arrX.unshift(x-30);
        arrY.unshift(y);
        }else if(dx<0 && dy == 0){ // YSAR
        arrX.unshift(x+30);
        arrY.unshift(y); 
        }else if(dy<0 && dx == 0){ //fo9
        arrX.unshift(x);
        arrY.unshift(y+30); 
        }else if(dy>0 && dx == 0){ //lota
        arrX.unshift(x);
        arrY.unshift(y-30); 
        }
        //
            dxV[0] = dx;
            dyV[0] = dy;
         
        }else{ 
        if(dxV[0]>0 && dyV[0] == 0){ //ymin
        arrX.unshift(arrX[0]-30);
        arrY.unshift(arrY[0]);
        }else if(dxV[0] <0 && dyV[0] == 0){ // YSAR
        arrX.unshift(arrX[0]+30);
        arrY.unshift(arrY[0]); 
        }else if(dyV[0]<0 && dxV[0]==0){ //fo9
        arrX.unshift(arrX[0]);
        arrY.unshift(arrY[0]+30); 
        }else if(dyV[0] >0 && dxV[0] == 0){ //lota
        arrX.unshift(arrX[0]);
        arrY.unshift(arrY[0] -30); 
        }
        }
        do{ 
        xfood = Math.random()*500;}while(xfood <30 ||xfood>(window.innerWidth)-1020 );
        do{ 
        yfood = Math.random()*innerHeight-200;}while(yfood <30 ||yfood>(window.innerHeight)-110 );
        dxV.unshift(dxV[0]);
        dyV.unshift(dyV[0]);
    }
}
function die(){
    dx=0;
    dy=0;
    for(var i=0;i<arrX.length;i++){
        c.fillStyle="black" ;
        color();
        c.fillRect(arrX[i],arrY[i],30,30);
        dxV[i]=0 ;
        dyV[i]=0 ;
    }
    canvas.style.backgroundColor="red";
    setTimeout(function(){location.reload();},2000);
}
function massFdhil(){
   for(var i=0;i<arrX.length;i++){
       if(arrX[i] == x && arrY[i]==y){
           return true;
           break;
       }
    }
}
