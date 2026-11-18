// Theme Toggle Logic (Fully Functional)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '🌙 Dark';
    } else {
        themeToggleBtn.textContent = '☀️ Light';
    }
});

// Contact Form Event Listener & Validation
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === "" || email === "" || message === "") {
        formMsg.style.color = "#ff4757";
        formMsg.textContent = "Please fill in all fields before sending!";
    } else {
        formMsg.style.color = "#2ed573";
        formMsg.textContent = `Awesome, ${name}! Your message has been sent successfully. 🚀`;
        contactForm.reset();
    }
});
