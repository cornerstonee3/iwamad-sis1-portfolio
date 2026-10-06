const html = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  formStatus.textContent = '';
  formStatus.className = 'text-sm font-bold mt-2';

  if (!name || !email || !message) {
    formStatus.textContent = 'Error. Please fill all the fields.';
    formStatus.style.color = 'red';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formStatus.textContent = 'Error. Please enter a valid email address';
    formStatus.style.color = 'red';
    return;
  }

  formStatus.textContent = 'Message sent successfully';
  formStatus.style.color = 'green';
  
  contactForm.reset();
});