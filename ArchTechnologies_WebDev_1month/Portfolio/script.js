
// ArchTechnologies_WebDev_1month\Portfolio\script.js

// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a navigation link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// =========================
// CURRENT YEAR
// =========================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
