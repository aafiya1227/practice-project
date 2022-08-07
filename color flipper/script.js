const getColor = () => {
  const number = Math.floor(Math.random() * 16777215);
  const randomcode = "#" + number.toString(16);
  document.body.style.backgroundColor = randomcode;
  document.getElementById("color-code").innerText = randomcode;
};

document.getElementById("btn").addEventListener("click", getColor);

getColor();
