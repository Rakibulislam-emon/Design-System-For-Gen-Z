// Function to load components dynamically
async function loadComponent(componentId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const content = await response.text();
    document.getElementById(componentId).innerHTML = content;
  } catch (error) {
    console.error(error);
  }
}

// Load all components before running event listeners
async function loadAllComponents() {
  await Promise.all([
    loadComponent("header-placeholder", "components/Navbar.html"),
    loadComponent("hero-placeholder", "components/Hero.html"),
    loadComponent("brands-placeholder", "components/Brands.html"),
    loadComponent("feature-placeholder", "components/Features.html"),
    loadComponent("statistics-placeholder", "components/Statistics.html"),
    loadComponent("stats-placeholder", "components/States.html"),
    loadComponent("testimonial-placeholder", "components/Testimonial.html"),
    loadComponent("location-placeholder", "components/Location.html"),
    loadComponent("queries-placeholder", "components/Queries.html"),
    loadComponent("ourApp-placeholder", "components/OurApp.html"),
    loadComponent("footer-placeholder", "components/Footer.html"),
  ]);

  // Now attach event listeners after components are fully loaded
  setupMenuToggle();
  setupFAQ(); // Add FAQ functionality
}

// Mobile menu toggle
function setupMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }
}

// Function to handle FAQ toggle
function setupFAQ() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      question.classList.toggle("active");
      answer.classList.toggle("open");
    });
  });
}

// Run the function to load components
loadAllComponents();