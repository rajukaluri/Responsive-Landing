// Get the navbar and the nav-links
const navbar = document.getElementById("navbar");
const navLinks = document.querySelector(".nav-links");

// Change navbar style when the page is scrolled
window.onscroll = function() {
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// Toggle the navigation links in mobile view
navbar.addEventListener("click", function(event) {
    if (window.innerWidth <= 768 && event.target.tagName === "A") {
        navLinks.style.display = "none";
    }
});
