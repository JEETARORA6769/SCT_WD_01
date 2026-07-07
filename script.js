// Select Elements
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const navbar = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

// Navbar Scroll Effect
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Active Navigation Highlight
window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){
            currentSection = section.id;
        }

    });

    navLinks.forEach(function(link){

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + currentSection){

            link.classList.add("active-link");

        }

    });

});

// Hamburger Menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }

});

// Close Menu After Clicking a Link
navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});