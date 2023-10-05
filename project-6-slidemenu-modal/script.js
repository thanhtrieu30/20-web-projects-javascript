const toggle = document.getElementById("toggle");
const signup = document.getElementById("signup");
const nav = document.getElementById("nav");
const modal = document.getElementById("modal");

const exit = document.getElementById("exit");

toggle.addEventListener("click", function () {
  document.body.classList.toggle("showNav");
});

signup.addEventListener("click", () => {
  modal.classList.add("showModal");
});

exit.addEventListener("click", () => {
  modal.classList.remove("showModal");
});
