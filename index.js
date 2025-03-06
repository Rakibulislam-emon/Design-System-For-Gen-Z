// Function to load components
async function loadComponent(componentId, filePath) {
  const response = await fetch(filePath);
  const content = await response.text();
  document.getElementById(componentId).innerHTML = content;
}

// Load header and hero sections
loadComponent("header-placeholder", "components/Navbar.html");
loadComponent("hero-placeholder", "components/Hero.html");
loadComponent("brands-placeholder", "components/Brands.html");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});
