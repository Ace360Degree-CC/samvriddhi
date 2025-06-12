const mobileMenu = document.getElementById("mobile-menu");
const navbarMenu = document.getElementById("navbar-menu");
const menuIcon = mobileMenu.querySelector("i");

mobileMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");

  // Toggle icon
  if (navbarMenu.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});
