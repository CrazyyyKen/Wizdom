function pageScroll() {
  window.scrollBy(0, 1);
}

const box1 = document.getElementById('homeWelcomeSection');
const box2 = document.getElementById('homeSection');
const boxLink = document.getElementById('homeWelcomeSection');

boxLink.addEventListener('click', (event) => {
  event.preventDefault();
  box1.style.display = 'none';
  box2.style.removeProperty("display");

  // Apply opacity and ScrollReveal animation after a short delay (e.g., 500ms)
  box1.style.opacity = 0;
  box2.style.opacity = 1;
  pageScroll()
  // Initialize ScrollReveal

  window.sr = ScrollReveal({ reset: true, viewFactor: 0.3 });
  sr.reveal('#missionVisionSection .home-btn', {
    duration: 1300,
    origin: 'top',
    distance: '130px',


  });
  sr.reveal('#welcomeSection .welcome-text-column', {
    duration: 1500,
    origin: 'right',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('.intro-book', {
    duration: 1500,
    origin: 'left',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('#whyUsSection .welcome-text-column', {
    duration: 1500,
    origin: 'left',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('#whyUsSection .logo-column', {
    duration: 1500,
    origin: 'right',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });




  sr.reveal('#exploreWebSection .column1', {
    duration: 800,
    origin: 'left',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });




  sr.reveal('#exploreWebSection .column2', {
    duration: 800,
    origin: 'bottom',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });




  sr.reveal('#exploreWebSection .column3', {
    duration: 800,
    origin: 'right',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });

  sr.reveal('#backToTopButton', {
    duration: 800,
    origin: 'bottom',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  // Add other ScrollReveal animations for other elements as needed
});




// Use ScrollReveal to apply animations




