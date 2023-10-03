const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControll = input.parentElement;
  formControll.className = "form-control success";
};
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
const checkRequire = (inputArr) => {
  inputArr.forEach((e) => {
    if (e.value.trim() === "") {
      showError(e, `${getFieldName(e)} is require`);
    } else {
      showSuccess(e);
    }
  });
};

const checkConfirmPassword = (p1, p2) => {
  if (p1.value !== p2.value) {
    showError(p2, "password not match!!!");
  }
};

const onSubmit = (e) => {
  e.preventDefault();
  checkRequire([username, email, password, password2]);
  checkConfirmPassword(password, password2);
};

form.addEventListener("submit", onSubmit);
