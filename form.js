const form = document.getElementById("form")
const button = document.getElementById("submit1")
button.disabled = true;
button.classList.add('is-inactive');

form.addEventListener("input", update)
form.addEventListener("change", update)

function update() {
  const isRequired = form.checkValidity()

  if (isRequired) {
    button.disabled = false;
    button.classList.remove('is-inactive');
    button.classList.add('is-active');
    return
  }else {
    button.disabled = true;
    button.classList.remove('is-active');
    button.classList.add('is-inactive');
}
}
