const images = document.querySelectorAll(".images img");
const current = document.getElementById("current");
images.forEach((img) => img.addEventListener("click", fullImg));

function fullImg(e) {
  current.src = e.target.src;
}
