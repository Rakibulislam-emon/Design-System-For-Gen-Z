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

// Load all components before running any event listeners
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

  // run those functions which need to be initialize before events listens
  setupMenuToggle();
  setupFAQ();
  setupTestimonials(); 
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

// Function to handle testimonials for mobile view
function setupTestimonials() {
  // Only run this on smaller screens
  if (window.innerWidth <= 768) {
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialsContainer = document.querySelector('.testimonials');
    
    // Check if there are more than 3 testimonials
    if (testimonials.length > 3) {
      const loadMoreButton = document.createElement('button');
      loadMoreButton.textContent = 'Load More ＋';
      loadMoreButton.className = 'load-more-btn';
      testimonialsContainer.parentNode.insertBefore(loadMoreButton, testimonialsContainer.nextSibling);
      
      // Initially hide testimonials beyond the first 3
      testimonials.forEach((testimonial, index) => {
        if (index >= 3) {
          testimonial.style.display = 'none';
        }
      });
      
      // Add click event to show hidden testimonials
      loadMoreButton.addEventListener('click', function() {
        testimonials.forEach(testimonial => {
          testimonial.style.display = 'block';
        });
        // Hide the button after all testimonials are shown
        this.style.display = 'none';
      });
    }
  }
}

// Run the function to load components
loadAllComponents();

// Also handle window resize to apply the testimonial logic when screen size changes
window.addEventListener('resize', function() {
  // First remove any existing load more button
  const existingButton = document.querySelector('.load-more-btn');
  if (existingButton) {
    existingButton.remove();
  }
  
  // Reset all testimonials to be visible
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach(testimonial => {
    testimonial.style.display = 'block';
  });
  
  // Re-run the setup
  setupTestimonials();
});


// navigate to top
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.querySelector(".scroll-top");

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
