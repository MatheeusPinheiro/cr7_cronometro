const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtnEl = document.querySelector("#startBtn")
const pauseBtnEl = document.querySelector("#pauseBtn")
const resetBtnEl = document.querySelector("#resetBtn")
const resumeBtnEl = document.querySelector("#resumeBtn")

let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false

const music1 = new Audio("audio/CristianoRonaldoSIUUU.mp3"); 
const music2 = new Audio("audio/AURA.mp3"); 
const music3= new Audio("audio/EU%20SOU%20O%20MILIOR!.mp3");

// Defina os volumes
music1.volume = 1.0; 
music2.volume = 0.5; 
music3.volume = 1.0; 

music1.addEventListener('ended', ()=>{
    music3.play()
})

music3.addEventListener('ended', ()=>{
    music1.play()
})


startBtnEl.addEventListener('click', startTimer)
pauseBtnEl.addEventListener('click', pauseTimer)
resumeBtnEl.addEventListener('click', resumeTimer)
resetBtnEl.addEventListener('click', resetTimer)



function startTimer() {

    // Inicia as músicas junto com o cronômetro
    music1.play();
    music2.play();
    music3.play();
    
    interval = setInterval(()=>{

        if (!isPaused){
            milliseconds += 10

            if(milliseconds === 1000){
                seconds++
                milliseconds = 0
            }

            if(seconds === 60){
                minutes++
                seconds = 0
            }

            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            millisecondsEl.textContent = formatMilliseconds(milliseconds)

        }


    }, 10)

    startBtnEl.style.display = "none"
    pauseBtnEl.style.display = "block"
}


function pauseTimer(){
    isPaused = true
    music1.pause();
    music2.pause();
    music3.pause();
    pauseBtnEl.style.display = "none"
    resumeBtnEl.style.display = "block"
}


function resumeTimer(){
    isPaused = false
    music1.play();
    music2.play();
    music3.play();
    pauseBtnEl.style.display = "block"
    resumeBtnEl.style.display = "none"
}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}

function resetTimer(){
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0
    isPaused = false

    music1.pause();
    music1.currentTime = 0;
    music2.pause();
    music2.currentTime = 0;
    music3.pause();
    music3.currentTime = 0;

    minutesEl.textContent = '00'
    secondsEl.textContent = '00'
    millisecondsEl.textContent = '000'

    startBtnEl.style.display = "block"
    pauseBtnEl.style.display = "none"
    resumeBtnEl.style.display = "none"
}
