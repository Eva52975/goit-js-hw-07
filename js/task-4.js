const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  const infoUser = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (infoUser.password.length && infoUser.email.length > 0) {
    console.log(infoUser);
  } else {
    return alert("All form fields must be filled in");
  }

  form.reset();
}
