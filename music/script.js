let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let mySong = document.querySelector("#mysong");
let gif = document.querySelector(".gif");
play.addEventListener("click", () => {
  if (play.classList.contains("play")) {
    pause.classList.add("active");
    play.classList.remove("active");
  }

  mySong.play();
  gif.style.opacity = 1;
});
pause.addEventListener("click", () => {
  if (pause.classList.contains("pause")) {
    pause.classList.remove("active");
    play.classList.add("active");
  }
  gif.style.opacity = 0;
  mySong.pause();
});
