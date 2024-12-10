var hamburger = document.getElementById("hamburger");
var navMenu = document.getElementById("nav-menu");
// toggle functionality
hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
        navMenu.style.top = "80px";
    }
    else {
        navMenu.style.top = "";
    }
});
