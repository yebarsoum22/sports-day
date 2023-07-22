var mobileMenuBtn = document.querySelector(".side-menu");
var mobileMenu = document.querySelector(".container");
mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
  } 
  else {
    mobileMenu.style.display = "none";
  }
});