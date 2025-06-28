// Scroll Fade-In Animations
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Button Click Logging (You can replace with real WhatsApp/form logic)
document.querySelectorAll('a.btn').forEach(button => {
  button.addEventListener('click', function (e) {
    console.log(`Button clicked: ${e.target.textContent.trim()}`);
    // Example: redirect logic
    // if (e.target.classList.contains('btn-alt')) {
    //   window.location.href = 'https://wa.me/your-number';
    // }
  });
});

// Future Chatbox Script Slot
// function loadChatbox() {
//   const script = document.createElement('script');
//   script.src = "https://your-chatbox-link.js";
//   document.body.appendChild(script);
// }
// loadChatbox(); // Uncomment if/when you have a chat widget link

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});