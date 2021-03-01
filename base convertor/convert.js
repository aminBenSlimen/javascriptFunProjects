var dec = document.getElementById("decimal"),
    binary = document.getElementById("binary"),
    hexadecimal = document.getElementById("hexadecimal"),
    octal = document.getElementById("octal");

dec.addEventListener("input",function(){
    if(isNaN(dec.value[(dec.value).split("").length-1]) || dec.value[(dec.value).split("").length-1] < 0){
        dec.value = dec.value.substring(0,dec.value.length-1);
    }
    
binary.value= decToBin();
octal.value = decToOct();
hexadecimal.value = decToHex();
arr=[];//to clean hex arr
arr1=[];
    
});


binary.addEventListener("input",function(){
    if((binary.value[(binary.value).split("").length-1])!=0 && binary.value[(binary.value).split("").length-1] != 1){
        binary.value = binary.value.substring(0,binary.value.length-1);
    }
dec.value = baseToDec(2,binary);
octal.value = decToOct();
hexadecimal.value = decToHex();
arr=[];//to clean hex arr
arr1=[]; 
});



hexadecimal.addEventListener("input",function(){
    if((((hexadecimal.value[(hexadecimal.value).split("").length-1]) < "A")&& isNaN(hexadecimal.value[(hexadecimal.value).split("").length-1])) || (hexadecimal.value[(hexadecimal.value).split("").length-1]) > "F" || (hexadecimal.value[(hexadecimal.value).split("").length-1]) < 0){
         hexadecimal.value = hexadecimal.value.substring(0,hexadecimal.value.length-1);
    }
dec.value = baseToDec(16,hexadecimal);
octal.value = decToOct();
binary.value = decToBin();
arr=[];//to clean hex arr
arr1=[];   
});


octal.addEventListener("input",function(){
    if(isNaN(octal.value[(octal.value).split("").length-1]) || octal.value[(octal.value).split("").length-1] < 0 ||
     octal.value[(octal.value).split("").length-1] >7 ){
        octal.value = octal.value.substring(0,octal.value.length-1);
    }
dec.value = baseToDec(8,octal);
binary.value = decToBin();
hexadecimal.value = decToHex();
arr=[];//to clean hex arr
arr1=[];   
});

function decToBin(){
    var s = 1,
    i = 0;
    var x = dec.value;
    while(parseInt(x)!=0){
        var r = parseInt(x%2);
        s = s/10 + parseInt(r);
        x = parseInt(x/2);
        i++;
    }
    return (parseInt((s * Math.pow(10,i))/10)).toString(); // 010100
}


var arr=[],
    arr1=[];
function decToHex(){
    var x = dec.value;
    while(parseInt(x)!=0){
        x=x/16;
        r=x-parseInt(x);
        if(r*16 <10){
          arr.unshift(""+r*16); 
        }else{
            switch(r*16){
                case 10 : arr.unshift("A");
                    break;
                case 11 : arr.unshift("B");
                    break;
                case 12 : arr.unshift("C");
                    break;
                case 13 : arr.unshift("D");
                    break;
                case 14 : arr.unshift("E");
                    break;
                case 15 : arr.unshift("F");
                    break;
            }
        }
        x = parseInt(x);
    }
   return arr.join("").toString();
}

function decToOct(){
    
    var x = dec.value;
    while(parseInt(x)!=0){
        x=x/8;
        r=x-parseInt(x);
          arr1.unshift(r*8);    
        x = parseInt(x);
        
}
     return (arr1.join("")).toString() ;   //7403
}

function baseToDec(base,type){
    var x = type.value,
        i,
        j=0,
        h=0;
      x = (('' + x).split('')).map(function(digit){
          if(isNaN(digit)){
              switch(digit){
                case "A" : digit = 10;
                    break;
                case "B" : digit = 11;
                    break;
                case "C" : digit = 12;
                    break;
                case "D" : digit = 13;
                    break;
                case "E" : digit = 14;
                    break;
                case "F" : digit = 15;
                    break;
            }
          }
          return +digit;
      });
    for(var i = x.length-1;i>=0;i--){
        h+=parseInt(x[i])*Math.pow(base,j);
        j++;
    }
    return h.toString();
}
function reset(){
    dec.value = "";
   binary.value= "";
octal.value = "";
hexadecimal.value ="";
}