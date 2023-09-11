function pageScroll() {
  window.scrollBy(0, 1);
}

const box1 = document.getElementById('workWelcomeSection');
const box2 = document.getElementById('workSection');
const boxLink = document.getElementById('workWelcomeSection');

boxLink.addEventListener('click', (event) => {
  event.preventDefault();
  box1.style.display = 'none';
  box2.style.removeProperty("display");

  // Apply opacity and ScrollReveal animation after a short delay (e.g., 500ms)
  box1.style.opacity = 0;
  box2.style.opacity = 1;
  pageScroll()
  // Initialize ScrollReveal

  window.sr = ScrollReveal({ reset: true, viewFactor: 0.1 });
  sr.reveal('#workSection .section-title', {
    duration: 1500,
    origin: 'top',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('#instructionSection', {
    duration: 1500,
    origin: 'top',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('iframe', {
    duration: 1500,
    origin: 'top',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('.rules-and-regulations-column', {
    duration: 1500,
    origin: 'top',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
});