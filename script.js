var display = document.getElementById("display");
var value = "";
var displayLength = display.innerHTML.length;

function ac(){
    value = "";
    display.innerHTML = "0";
}

var add = function(num){
   if(display.innerHTML.length < 10){
       if(display.innerHTML.substr(0) == "0"){
           display.innerHTML = "";
       }
       
        if(num == '1'){
            display.innerHTML += " 1";
            value += '1';
        }
        else{
            display.innerHTML += num;
            value += num;
        }
 
       
   }
   else{
       display.innerHTML += "";
   }
}

function operator(operator){
    display.innerHTML = "";
    if(display.innerHTML.length < 10){
        if(display.innerHTML.substr(display.innerHTML.length - 1) == operator){
            display.innerHTML += "";
        }
        else{
            display.innerHTML += operator;
            value += operator;
    
    }
}
else{
    display.innerHTML += "";
}
}

function equal(){
    var x = value;
    var y = eval(x);
            document.getElementById('display').innerHTML = y;
            console.log(value);
}

display.innerHTML = "";
value = "";
