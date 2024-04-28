const userHello = document.querySelector("#name-input");

const inputSpan = document.querySelector("#name-output");

userHello.addEventListener("input", handleInput);

function handleInput(event) {
  const userName = event.target.value;
  if (userName.trim() === "") {
    inputSpan.textContent = "Anonymous";
  } else {
    inputSpan.textContent = userName;
  }
}
