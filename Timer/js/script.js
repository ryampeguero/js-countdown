"use strict"
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
let realTimer;
console.log(btnStart);
let minute = 0;
let second = 0;


btnStart.addEventListener("click", setTimer);
btnStop.addEventListener("click", stopTimer);




function timer(){
    if(second < 59){
        second++;
    }else{
        second = 0;
        minute++;
    }

    printTime(minute, second);
    
}

function setTimer(){
    realTimer = setInterval(timer, 100);
}

function stopTimer(){
    clearInterval(realTimer);
}

function printTime(m, s){
    m = (m < 10) ? ("0" + m.toString()) : (m.toString());

    s = (s < 10) ? ("0" + s.toString()) : (s.toString());
    
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
    
}