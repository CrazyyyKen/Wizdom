function pageScroll() {
    window.scrollBy(0, 1);
  }
  
  const box1 = document.getElementById('aboutUsWelcomeSection');
  const box2 = document.getElementById('aboutUsSection');
  const boxLink = document.getElementById('aboutUsWelcomeSection');
  
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
    window.srSpecial = ScrollReveal({ reset: true, viewFactor: 0.1 });
    srSpecial.reveal('#whoIsWizdomSection img', {
      duration: 1500,
      origin: 'left',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
    srSpecial.reveal('.welcome-text-column', {
      duration: 1500,
      origin: 'right',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
    sr.reveal('video', {
      duration: 1500,
      origin: 'top',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
    sr.reveal('.mission-column', {
      duration: 1500,
      origin: 'right',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
  
    sr.reveal('.vision-column', {
      duration: 1500,
      origin: 'left',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
    sr.reveal('#missionVisionSection .home-btn', {
        duration: 1300,
        origin: 'bottom',
        distance: '130px',
    
    
      });
      sr.reveal('#founderSection .section-title', {
        duration: 1300,
        origin: 'top',
        distance: '130px',
    
    
      });
      sr.reveal('#founderSection .home-btn', {
        duration: 1300,
        origin: 'top',
        distance: '130px',
    
    
      });
  
    sr.reveal('#founder1, #founder2', {
      duration: 1300,
      origin: 'left',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
  
  
  
  
    sr.reveal('#founder3, #founder4', {
      duration: 1300,
      origin: 'right',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
  
    
    // Add other ScrollReveal animations for other elements as needed
  });