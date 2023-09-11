function pageScroll() {
    window.scrollBy(0, 1);
  }
  
  const box1 = document.getElementById('contactWelcomeSection');
  const box2 = document.getElementById('contactSection');
  const boxLink = document.getElementById('contactWelcomeSection');
  
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
    
    sr.reveal('#locationColumn', {
      duration: 1500,
      origin: 'left',
      distance: '100px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
    sr.reveal('#inquiryFormColumn', {
      duration: 1500,
      origin: 'right',
      distance: '100px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
    
  });