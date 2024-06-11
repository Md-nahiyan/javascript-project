

// const progress = document.getElementById("progress-bar");
// const song = document.getElementById("song");
// const ctrIcon = document.getElementById("ctrIcon");


// song.onloadedmetadata = function() {
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }

// function playPause(){
//     if (ctrIcon.classList.contains("fa-pause")) {
//         song.pause();
//         ctrIcon.classList.remove("fa-pause");
//         ctrIcon.classList.add("fa-play");
//     }
//     else{
//         song.play();
//         ctrIcon.classList.add("fa-pause");
//         ctrIcon.classList.remove("fa-play");
//     }
// }

// if (song.play()) {
//     setInterval(()=>{
//         progress.value =song.currentTime;
//     },500)
// }

// progress.onchange = function(){
//     song.play();
//     song.currentTime = progress.value;
//     ctrIcon.classList.add("fa-pause");
//     ctrIcon.classList.remove("fa-play");
// }

// watch-area-js

const displayTime  = document.getElementById("display");

let [seconds, minutes, hours] = [0,0,0];
let timer = null;

function stopWatch() {

    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = ` ${h} : ${m} : ${s} `;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = `00:00:00`;
}