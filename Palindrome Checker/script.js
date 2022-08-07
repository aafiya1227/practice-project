const text = document.querySelector(".text");
const button = document.querySelector(".inputs button");
const infoText = document.querySelector(".info-text");
let filterInput;

button.addEventListener("click", () => {
  //   console.log(`aafiya`);
  let reverseInput = filterInput.split("").reverse().join("");

  infoText.style.display = "block";
  if (filterInput != reverseInput) {
    return (infoText.innerHTML = `No, <span>'${text.value}' </span> is  not a Palindrome!`);
  }
  infoText.innerHTML = `Yes, <span>'${text.value}' </span> is  a Palindrome!`;
});

text.addEventListener("keyup", () => {
  filterInput = text.value.replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return button.classList.add("active");
  }
  button.classList.remove("active");
});
