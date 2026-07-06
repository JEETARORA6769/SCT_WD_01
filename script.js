console.log("JavaScript Connected Successfully!");
const navbar = document.getElementById("navbar");
console.log(navbar);
window.addEventListener("scroll", function () {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else{
        navbar.classList.remove("scrolled");
    }
    console.log(window.scrollY);
});
