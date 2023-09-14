
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
      duration: 1000,
      origin: 'right',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
    sr.reveal('video', {
      duration: 1000,
      origin: 'top',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
    sr.reveal('.mission-column', {
      duration: 1000,
      origin: 'right',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
  
    sr.reveal('.vision-column', {
      duration: 1000,
      origin: 'left',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
    sr.reveal('#missionVisionSection .home-btn', {
        duration: 1000,
        origin: 'bottom',
        distance: '130px',
    
    
      });
      sr.reveal('#founderSection .section-title', {
        duration: 1000,
        origin: 'top',
        distance: '130px',
    
    
      });
      sr.reveal('#founderSection .home-btn', {
        duration: 1000,
        origin: 'top',
        distance: '130px',
    
    
      });
  
    sr.reveal('#founder1, #founder2', {
      duration: 1000,
      origin: 'left',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
  
  
  
  
    sr.reveal('#founder3, #founder4', {
      duration: 1000,
      origin: 'right',
      distance: '130px',
  
      // Set this to true to repeat the animation
      // Set the delay between repeats in milliseconds (optional)
    });
  
    
    // Add other ScrollReveal animations for other elements as needed
// Run the checkOverflow function on page load and window resize
window.addEventListener('load', () => {
  const sectionIds = ['aboutUsSection', 'whyUsSection', 'exploreWebSection']; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});

window.addEventListener('resize', () => {
  const sectionIds = ['aboutUsSection', 'whyUsSection', 'exploreWebSection']; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});
