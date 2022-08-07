let second = document.getElementById("second");
let miliSecond = document.getElementById("milisecond");
let minute = document.getElementById("minute");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

var sec = 0;
var milisec = 0;
var min = 0;
var timeInterval;

const timer = () => {
  milisec++;
  if (milisec < 9) {
    miliSecond.innerHTML = "0" + milisec;
  }
  if (milisec > 9) {
    miliSecond.innerHTML = milisec;
  }
  if (milisec > 99) {
    sec++;
    second.innerHTML = "0" + sec;
    milisec = 0;
    miliSecond.innerHTML = "0" + 0;
  }

  if (sec > 9) {
    second.innerHTML = sec;
  }
  if (sec > 60) {
    min++;
    minute.innerHTML = "0" + min;
    sec = 0;
    second.innerHTML = "0" + 0;
    milisec = 0;
    miliSecond.innerHTML = "0" + 0;
  }
};
//start
start.addEventListener("click", () => {
  timeInterval = setInterval(timer, 10);
});

//stop
stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});

//reset
reset.addEventListener("click", () => {
  clearInterval(timeInterval);
  min = "00";
  sec = "00";
  milisec = "00";
  minute.innerHTML = min;
  second.innerHTML = sec;
  miliSecond.innerHTML = milisec;
});
