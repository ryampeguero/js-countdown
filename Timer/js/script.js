"use strict"
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");

let realTimer;
console.log(btnStart);
let minute = 0;
let second = 0;
let intervalControl = 0;

btnStart.addEventListener("click", setTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);




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
    intervalControl++;
    if(intervalControl == 1){
        realTimer = setInterval(timer, 1000);
    }
}

function stopTimer(){
    clearInterval(realTimer);
    intervalControl = 0;
}

function resetTimer(){
    stopTimer();
    minute = 0;
    second = 0;
    printTime(minute, second);
}

function printTime(m, s){
    console.log("ciao");
    m = (m < 10) ? ("0" + m.toString()) : (m.toString());

    s = (s < 10) ? ("0" + s.toString()) : (s.toString());
    
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
    
}