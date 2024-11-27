var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var second = document.querySelector("#second");
var ampm = document.querySelector("#ampm");

var clock = function(){
    var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var am = ampm>12?"PM":"AM";

if(h>12){
    h = h-12;
}

h= h<10?"0"+h:h;
m= m<10?"0"+m:m;
s= s<10?"0"+s:s;


hour.innerHTML = h;
minute.innerHTML = m;
second.innerHTML = s;
ampm.innerHTML = am;
}

setInterval(clock,1000);