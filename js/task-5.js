function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clickButton = document.querySelector(".change-color");

clickButton.addEventListener("click", function () {
  const colorFunction = getRandomHexColor();
  document.body.style.backgroundColor = colorFunction;
  document.querySelector(".color").textContent = colorFunction;
});
