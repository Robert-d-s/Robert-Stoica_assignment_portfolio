const toggleDarkModeButton = document.querySelector("#toggle");
const body = document.querySelector("body");

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// const toggleButton = document.getElementById("toggle-dark-mode");

// toggleButton.addEventListener("click", function () {
//   document.body.classList.toggle("dark-mode");
//   toggleButton.classList.toggle("dark-mode");
// });
