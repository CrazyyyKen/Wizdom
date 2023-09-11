
function pageScroll() {
  window.scrollBy(0, 1);
}

const box1 = document.getElementById('faqWelcomeSection');
const box2 = document.getElementById('faqSection');
const boxLink = document.getElementById('faqWelcomeSection');

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
  
  sr.reveal('#faqSection .section-title', {
    duration: 1500,
    origin: 'top',
    distance: '130px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('#question1', {
    duration: 2000,
    origin: 'top',
    distance: '200px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('#question2', {
    duration: 2500,
    origin: 'top',
    distance: '200px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('#question3', {
    duration: 3000,
    origin: 'top',
    distance: '200px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('#question4', {
    duration: 3500,
    origin: 'top',
    distance: '200px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('#question5', {
    duration: 4000,
    origin: 'top',
    distance: '200px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  sr.reveal('.contact-us-column', {
    duration: 4500,
    origin: 'top',
    distance: '200px',

    // Set this to true to repeat the animation
    // Set the delay between repeats in milliseconds (optional)
  });
  const collapseBox = document.querySelectorAll('.faq-column');
  const arrow = document.querySelectorAll('.arrow');

  // Loop through all the boxes
  collapseBox.forEach((box, index) => {
    // Add a click event listener to each box
    box.addEventListener('click', function() {
      // Toggle the 'rotate' class on the arrow inside the clicked box
      arrow[index].classList.toggle('rotate');
    });
  });
});



    