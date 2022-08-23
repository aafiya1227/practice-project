let imgs = document.querySelectorAll(".gallary img");
let fullImage = document.querySelector(" #fullImage");
let fullImg = document.getElementById("full-img");
let close = document.querySelector("#close");

imgs.forEach((img) => img.addEventListener("click", fullImgs));

function fullImgs(e) {
  fullImg.style.display = "flex";
  fullImage.src = e.target.src;
}

close.addEventListener("click", () => {
  fullImg.style.display = "none";
});
