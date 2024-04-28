function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const input = controls.children[0];
const btnCreate = controls.children[1];
const btnDestroy = controls.children[2];

const createBoxes = (amount) => {
  amount = input.value;
  input.value = "";

  if (amount >= 1 && amount <= 100) {
    const arrayBoxes = [];

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      arrayBoxes.push(box);
    }
    boxes.append(...arrayBoxes);
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
