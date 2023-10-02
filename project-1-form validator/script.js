const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
// const submit = document.getElementById("submit");

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequire(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is require`);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not Valid !!!");
  }
};

const checkMatchPassword = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Password not match !!!");
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequire([username, email, password, password2]);
  validateEmail(email);
  checkMatchPassword(password, password2);
});
