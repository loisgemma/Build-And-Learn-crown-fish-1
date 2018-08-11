// Navbar Toggle Button
var btnToggle = document.querySelector(".btn-toggle");
var navMenu = document.querySelector(".nav-menu");
var isShow = false;
btnToggle.addEventListener("click", function(e) {
  e.preventDefault;
  if (!isShow) {
    navMenu.classList.add("show");
    isShow = true;
  } else {
    navMenu.classList.remove("show");
    isShow = false;
  }
});
