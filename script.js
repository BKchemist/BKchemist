// script.js
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickMeBtn");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
        message.textContent = "Thanks for joining! We’ll be in touch soon.";
    });
});

//footer script
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  
  if (email) {
    alert(`Thanks for subscribing, ${email}!`);
    this.reset();
  } else {
    alert('Please enter a valid email.');
  }
});

