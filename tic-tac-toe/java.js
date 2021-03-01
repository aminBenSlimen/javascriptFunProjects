/* console alert*/

var i = 0 ;
 var isChecked=false,
     oldImg = "none",
     win = false;
     document.getElementById("ops").innerHTML ;
var t=[5,0,7,11,9,561,23,2,.1];
var arr=[10,10,10];
function put(a){
    console.log(verif(a) + " " + i);
    if((document.getElementById("not").innerHTML != "win" || (document.getElementById("not").innerHTML == "draw") ) 
       && verif(a)==true){
       console.log("i'm here"); 
    var p;
    if(i % 2 ==0)
        {
            p="url(tic.png)"//x
        }else
            {
                p="url(toe.png)" // x
            }
    t[a-1]=p;
         
        document.getElementById("put"+(a-1)).style.backgroundImage=p;
        document.getElementById("put"+(a-1)).style.backgroundSize="140%";
        document.getElementById("put"+(a-1)).style.backgroundRepeat="no-repeat";
     check();
        if(win == true && document.getElementById("not").innerHTML != "draw"){
            addScore (p);
        }
   isChecked=true;
    i++;
    }
}
function check(){
    if((isChecked===true) && (t[0] == t[1]) && (t[1] == t[2])){ // first line
  document.getElementById("not").innerHTML = "win";
        win = true ;
        oldImg = t[0];
        arr[0]=0;
        arr[1]=1;
        arr[2]=2;
        twinkel();
        setTimeout(reset,4500);
}
    if((isChecked===true) && (t[3] == t[4]) && (t[3] == t[5])){ // second line
  document.getElementById("not").innerHTML = "win";
        win = true ;
        oldImg = t[5];
        arr[0]=3;
        arr[1]=4;
        arr[2]=5;
        twinkel();
        setTimeout(reset,4500);
}
    if((isChecked===true) && (t[6] == t[7]) && (t[6] == t[8])){ //third line
  document.getElementById("not").innerHTML = "win";
        win = true ;
        oldImg = t[6];
        arr[0]=6;
        arr[1]=7;
        arr[2]=8;
        twinkel();
        setTimeout(reset,4500);
}
    if((isChecked===true) && (t[1] == t[4]) && (t[4] == t[7])){  //secnd colone
  document.getElementById("not").innerHTML = "win";
        win = true ;
        oldImg = t[4];
        arr[0]=4;
        arr[1]=1;
        arr[2]=7;
        twinkel();
        setTimeout(reset,4500);
}
    if((isChecked===true) && (t[2] == t[5]) && (t[8] == t[2])){  //third colone
  document.getElementById("not").innerHTML = "win";
        win = true ;
        oldImg = t[5];
        arr[0]=8;
        arr[1]=5;
        arr[2]=2;
        twinkel();
        setTimeout(reset,4500);
}
    if((isChecked===true) && (t[3] == t[6]) && (t[3] == t[0])){   // first colone
  document.getElementById("not").innerHTML = "win";
        win = true ;
        oldImg = t[3];
        arr[0]=3;
        arr[1]=6;
        arr[2]=0;
        twinkel();
        setTimeout(reset,4500);
}
    if((isChecked===true) && (t[0] == t[4]) && (t[0] == t[8])){   // forword diag
  document.getElementById("not").innerHTML = "win";
        win = true ;
        oldImg = t[4];
        arr[0]=0;
        arr[1]=4;
        arr[2]=8;
        twinkel();
        setTimeout(reset,4500);
}
    if((isChecked===true) && (t[6] == t[4]) && (t[6] == t[2])){  //  backword diag
  document.getElementById("not").innerHTML = "win";
        win= true ;
        oldImg = t[6];
        arr[0]=4;
        arr[1]=2;
        arr[2]=6;
        twinkel();
        setTimeout(reset,4500);
}
        if(win == false && i==8){
            document.getElementById("not").innerHTML = "draw";
            win = true ;
            setTimeout(reset,2000);
        }
        
}
function reset(){
    if(i>9 || win == true){
        
        for(var j=0;j<9;j++){
            document.getElementById("put"+j).style.backgroundImage="none";
            
        }
        document.getElementById("not").innerHTML = "play again ?";
        t=[5,0,7,11,9,561,23,2,.1];
        i=0;
        isChecked=false;
        win = false ;
    }
}
function animation(){
    document.getElementById("put"+arr[0]).style.backgroundImage="none";
    document.getElementById("put"+arr[1]).style.backgroundImage="none";
    document.getElementById("put"+arr[2]).style.backgroundImage="none";
}
function lineOn(){
    document.getElementById("put"+arr[0]).style.backgroundImage=oldImg;
    document.getElementById("put"+arr[1]).style.backgroundImage=oldImg;
    document.getElementById("put"+arr[2]).style.backgroundImage=oldImg;
    
}
function twinkel(){
    var nb = 0;
    for(var count=0;count<4;count++){
            setTimeout(lineOn,nb+500);
        setTimeout(animation,nb+1050);
            nb+=1000;
    }
     t=[5,0,7,11,9,561,23,2,.1];
}
function verif(a){
    if((t[a-1] == "url(tic.png)" || t[a-1] == "url(toe.png)")){
        return false ;
    }else{
        return true ;
    }
    
}

function addScore (p){
    switch(p){
        case "url(tic.png)" :
            document.getElementById("xps").innerHTML ++ ;
        break;
        case "url(toe.png)" :
             document.getElementById("ops").innerHTML ++ ;
        break;
            
    }
}