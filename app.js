const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".aside");

navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-aside");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-aside");
});
