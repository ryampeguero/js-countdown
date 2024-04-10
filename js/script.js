"use strict"

let timeCount = 10;
const spanTimer = document.getElementById("timer");

const realTimer = setInterval(cutTime, 500); 

function cutTime(){
    spanTimer.innerText = --timeCount;
    console.log(timeCount);
    if(timeCount == 0){
        clearInterval(realTimer);
        spanTimer.innerText = "Buon Anno!";
        timeCount = 10;
    }
}