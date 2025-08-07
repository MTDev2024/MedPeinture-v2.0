// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Testimonial slider
const testimonials = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".testimonial-dot");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial) => testimonial.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("bg-blue-600"));
  dots.forEach((dot) => dot.classList.add("bg-gray-300"));

  testimonials[index].classList.add("active");
  dots[index].classList.remove("bg-gray-300");
  dots[index].classList.add("bg-blue-600");
  currentTestimonial = index;
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-index"));
    showTestimonial(index);
  });
});

// Auto-rotate testimonials
setInterval(() => {
  let nextTestimonial = currentTestimonial + 1;
  if (nextTestimonial >= testimonials.length) {
    nextTestimonial = 0;
  }
  showTestimonial(nextTestimonial);
}, 5000);

// Contact form submission
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Here you would typically send the form data to a server
  // For this example, we'll just show the success message
  contactForm.reset();
  formSuccess.classList.remove("hidden");

  // Hide success message after 5 seconds
  setTimeout(() => {
    formSuccess.classList.add("hidden");
  }, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});
