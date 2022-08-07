const currentTime = document.querySelector("h1");
const content = document.querySelector(".content");
const selectMenu = document.querySelectorAll("select");
const button = document.querySelector("button");
let gif = document.querySelector(".gif");
let image = document.querySelector(".image");

let alarmTime,
  isAlaramSet = false;
ringtone = new Audio("../alarm clock/alarm.mp3");

for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}" >${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}" >${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}" >${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  let date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h == 0 ? (h = 12) : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  if (alarmTime == `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
    if (image.classList.contains("image")) {
      gif.classList.add("active");
      image.classList.remove("active");
    }
  }
}, 1000);

function setAlarm() {
  if (isAlaramSet) {
    alarmTime = "";
    ringtone.pause();
    if (gif.classList.contains("gif")) {
      gif.classList.remove("active");
      image.classList.add("active");
    }
    content.classList.remove("disable");

    button.innerText = "Set Alarm";
    return (isAlaramSet = false);
  }

  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("Please, select a valid time!");
  }
  isAlaramSet = true;
  alarmTime = time;

  content.classList.add("disable");
  button.innerText = "Clear Alarm";
}

button.addEventListener("click", setAlarm);
