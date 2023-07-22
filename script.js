// Smooth scroll when clicking on navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple email validation for the contact form
const contactForm = document.getElementById('contact-form');
const errorMessage = document.getElementById('contact-error-message');

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value.trim())) {
    errorMessage.textContent = 'Please enter a valid email address.';
  } else {
    // Perform any action you want when the form is submitted successfully, e.g., sending an email
    errorMessage.textContent = '';
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});
