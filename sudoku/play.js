function applay(h,value){
    h=Number(h.id);
    i=parseInt(h/9);
    j=h%9;
    raws[i][j]=Number(value);
    cols[j][i]=Number(value);
}
let noLoop = false;
function auto(){
    
   let h=0;
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let rep=0;
            let nm=[];
            let number=raws[i][j];
            if(number == ""){     
                for(let h=1;h<=9;h++){
                    if(chechHere(h,cols[j])||chechHere(h,raws[i])||chechHere(h,squars[toSquarUnit(i,j)]) ){//found it
                        nm.push(h);

                    }else{
                        rep = h;
                    }
                    if(nm.length == 8){//done
                        document.getElementById(h).value = Number(rep);
                        raws[i][j]=Number(rep);
                        cols[j][i]=Number(rep);
                        insialSquars();
                     }
                }
               
            }
            h++;
        } 
    }
    
}

function auto2(){
    
    for(let k=1;k<=9;k++){
        for(let i=0;i<9;i++){
            let posibility=9;
        if(!chechHere(k,raws[i])){          
            let h=0;
            for(let j=0;j<9;j++){          
               
                if(raws[i][j] == ""){ 
                   
                    if(chechHere(k,cols[j])){
                        posibility--;
                    }else if(chechHere(k,squars[toSquarUnit(i,j)])){
                        posibility--;
                    }else{
                        h=j;
                    }
                }else{
                     posibility--;
                }
             
            }
             if(posibility == 1 ){
                 
                document.getElementById(9*i+h).value = Number(k);
                raws[i][h]=Number(k);
                cols[h][i]=Number(k);
                insialSquars();
               
            }
        }
      }
    }
}

let i=0,j=0,l=1,h=0,posibility=9;
function Update(){
    if(l==10){
        l=1;
    }
document.getElementById("current").innerHTML = l;

//

if(!chechHere(l,raws[i])){ 
if(raws[i][j] == ""){       
    if(chechHere(l,cols[j])||chechHere(l,squars[toSquarUnit(i,j)])){
        posibility--;
    }else{
        h=j;
    }
}else{
     posibility--;
}
}
//
j++;
if(j==9){
    if(posibility == 1){
      
        document.getElementById(9*i+h).value = Number(l);
        raws[i][h]=Number(l);
        cols[h][i]=Number(l);
        insialSquars();
    }
}
if(j==9){
    h=0;
    posibility =9;
    j=0;
    i++;   
}


if(i==9){
        let full=[];
        for(let k=0;k<81;k++){
            
            if(document.getElementById(k).value == "")
            document.getElementById(k).style.backgroundColor = "rgba(0,0,0,0)" ;

            if(document.getElementById(k).value != ""){
                full.push("*");
                if(main[k] == "")
                document.getElementById(k).style.backgroundColor= "rgba(0,0,255,0.2)"
            }
        }
        if(full.length == 81){
            onOff();
        }
        i=0;
        l++;
}


if(document.getElementById(i*9+j).value == ""){ 
    document.getElementById(i*9+j).style.backgroundColor = "rgba(200,12,0,0.2)" 
}
    //document.getElementById(i*9+j).style.backgroundColor = "rgba(200,12,0,0.2)" 
    
if(!noLoop){
   // setTimeout(function(){
        requestAnimationFrame(Update);
   // },10);
}

}

function chechHere(number,thisArr){
    
    for(let i=0;i<9;i++){
       // console.log(number==thisArr[i]);
       if(number == thisArr[i] && i<9)
            return true ;
    }
}



function toSquarUnit(h,k){
    if(h<3){
        if(k<3)
        return 0;
        else if(k<6 && 3<=k)
        return 1;
        else if(k<9 && 6<=k)
        return 2;
    }else if(h<6 && 3<=h){
        if(k<3)
        return 3;
        else if(k<6 && 3<=k)
        return 4;
        else if(k<9 && 6<=k)
        return 5;
    }else if(h<9 && 6<=h){
        if(k<3)
        return 6;
        else if(k<6 && 3<=k)
        return 7;
        else if(k<9 && 6<=k)
        return 8;
    }

}

function onOff(){
    noLoop = !noLoop;
}