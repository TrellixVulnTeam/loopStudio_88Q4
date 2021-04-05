"use strict";
const navBtn = document.querySelector(".navbar-toggler");

navBtn.addEventListener("click", function () {
  this.parentElement.classList.toggle("bg-dark");
});
