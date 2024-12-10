const hamburger = document.getElementById("hamburger") as HTMLElement;
const navMenu = document.getElementById("nav-menu") as HTMLElement;
// toggle functionality

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    if(navMenu.classList.contains("active")){
        navMenu.style.top = "80px"
    }else{
        navMenu.style.top = "";
    }
})