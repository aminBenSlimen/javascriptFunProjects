
let main;
let raws = [[],[],[],[],[],[],[],[],[]];
let cols =[[],[],[],[],[],[],[],[],[]];
let squars =[[],[],[],[],[],[],[],[],[]];

function getRandomSudoku(){
    let x=Math.random()*9;
   
   main = dataS[Math.round(x)].split("");

}
getRandomSudoku();

let k=0;
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        if( main[k] == 0){
            main[k] = "";
            raws[i][j] = main[k];
            cols[j][i] =  main[k];
        }else{
            raws[i][j] = Number(main[k]);
            cols[j][i] =  Number(main[k]);
        }
       
      
     //  cols[j][i]= raws[i][j];
       k++;
    } 
}
function insialSquars(){
    squars =[[],[],[],[],[],[],[],[],[]]
    for(let h=0;h<9;h++){
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(h<3){
                    squars[h].push(raws[i][j+3*h]);
                }else if(h<6 && 3<=h){
                    squars[h].push(raws[i+3][j+(h-3)*3]);
                }else if(h<9 && 6<=h){
                    squars[h].push(raws[i+6][j+(h-6)*3]);
                }
                
              
            } 
        }
    }
}
insialSquars();

for(i=0;i<81;i++){
   
    if(i%9 == 0){
        document.write(`<br>`);
    }
   document.write(`<input type='text' id = ${i}  >`);
   document.getElementById(i).value = main[i];
   if(main[i] !=""){
  
    document.getElementById(i).style = "background-color :rgba(0,255,0,0.2);"; 
 }
   // console.log(document.getElementById(i).style)
   if(i%9 == 0){
    if(main[i] !=""){
        document.getElementById(i).style = "background-color :rgba(0,255,0,0.2);border-left: 2px ;border-left: solid;";
     }else
     document.getElementById(i).style = "border-left: 2px ;border-left: solid;"; 
   }
  
}


for(let i=2;i<82;i+=3){
    if(main[i] !=""){
        document.getElementById(i).style = "background-color :rgba(0,255,0,0.2);border-right: 2px ;border-right: solid";
     }else
    document.getElementById(i).style = "border-right: 2px ;border-right: solid;"
}


for(let i=27;i<36;i++){
    if(main[i] !=""){
        document.getElementById(i).style = "background-color :rgba(0,255,0,0.2);border-top: 2px ;border-top: solid;";
     }else
    document.getElementById(i).style += "border-top: 2px ;border-top: solid;"
    if(main[i+3*9] !=""){
        document.getElementById(i+3*9).style = "background-color :rgba(0,255,0,0.2);border-top: 2px ;border-top: solid;";
     }else
    document.getElementById(i+3*9).style += "border-top: 2px ;border-top: solid;"
    

  //  document.getElementById(i+9*6).style+= "border-top: 2px ;border-top: solid;"
    if(i==27){
        if(main[i] !=""){
            document.getElementById(i).style = "background-color :rgba(0,255,0,0.2);border-top: 2px ;border-top: solid;border-left: 2px ;border-left: solid;";
         }else
        document.getElementById(i).style = "border-top: 2px ;border-top: solid;border-left: 2px ;border-left: solid;"

       if(main[i+9*3] !=""){
            document.getElementById(i+9*3).style = "background-color :rgba(0,255,0,0.2);border-top: 2px ;border-top: solid;border-left: 2px ;border-left: solid;";
         }else
        document.getElementById(i+9*3).style = "border-top: 2px ;border-top: solid;border-left: 2px ;border-left: solid;"
    }
}
for(let i=29;i<36;i+=3){
    if(main[i] !=""){
        document.getElementById(i).style = "background-color :rgba(0,255,0,0.2);border-top: 2px ;border-top: solid;border-right: 2px ;border-right: solid;";
     }else
    document.getElementById(i).style = "border-top: 2px ;border-top: solid;border-right: 2px ;border-right: solid;"
    if(main[i+9*3] !=""){
        document.getElementById(i+9*3).style = "background-color :rgba(0,255,0,0.2);border-top: 2px ;border-top: solid;border-right: 2px ;border-right: solid;";
     }else
    document.getElementById(i+9*3).style = "border-top: 2px ;border-top: solid;border-right: 2px ;border-right: solid;"
    
}


let newColor = {
    red : 100,
    blue : 100,
    green : 100
}
let color ={
    red : 100,
    blue : 100,
    green : 100
}
let cont = true;
function backgroundColor(){
return
    color.red = colorLerp(color.red,newColor.red).thisColor;
    newColor.red = colorLerp(color.red,newColor.red).newColor;

    color.green = colorLerp(color.green,newColor.green).thisColor;
    newColor.green = colorLerp(color.green,newColor.green).newColor;

    color.blue = colorLerp(color.blue,newColor.blue).thisColor;
    newColor.blue = colorLerp(color.blue,newColor.blue).newColor;

    document.getElementById("body").style.backgroundColor =`rgba(${color.red},${color.green},${color.blue},1)`;
    requestAnimationFrame(backgroundColor);  
}
function colorLerp(thisColor , other){
    if(Math.abs(thisColor - other) <10 ){
        other =Math.random()*255;
     }
     else if(thisColor > other){
         thisColor-=0.2;
     }else{
        thisColor+=0.2;
     }
     return {
         thisColor : thisColor,
         newColor : other
     };
}
backgroundColor();
function update(){
    for(let i=0;i<81;i++){
        if(main[i]!=""){
            document.getElementById(i).readOnly =true;
        }
        
        document.getElementById(i).onkeypress = function(h){
            let oldVal=  document.getElementById(i).value;
            if(h.keyCode <49 || h.keyCode >57 || main[i]!=0){  
                
                document.getElementById(i).readOnly=true;
                document.getElementById(i).value=oldVal;
            }else{
                applay(h.target,h.key) 
                document.getElementById(i).readOnly=true;
                document.getElementById(i).value=h.key;
               
            }
           
        }
       }
      
       requestAnimationFrame(update);
}

update();
