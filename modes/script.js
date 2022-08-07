const button = document.querySelector(".btn");
const element = document.body;
button.addEventListener("click", () => {
  element.classList.toggle("bg-dark");
});
