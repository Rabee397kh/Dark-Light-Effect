const header = document.querySelector(".header");
const bars = document.querySelector(".cl");
const closeBtn = document.querySelector(".close-btn");

bars.addEventListener("click", () => {
  header.classList.add("menu-open");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("menu-open");
});

// const toggleTheme = document.querySelector(".toggle-theme");
const body = document.getElementById("body");

function toggleEffect() {
  body.classList.toggle("dark-mode");
}
