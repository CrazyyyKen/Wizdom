window.sr = ScrollReveal({ reset: true, viewFactor: 0.3 });
window.srSpecial = ScrollReveal({ reset: true, viewFactor: 0.1 });
srSpecial.reveal("#whoIsWizdomSection img", {
  duration: 1500,
  origin: "top",
  distance: "130px",

  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});
srSpecial.reveal(".welcome-text-column", {
  duration: 1000,
  origin: "top",
  distance: "130px",

  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});
sr.reveal("video", {
  duration: 1000,
  origin: "top",
  distance: "130px",

  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});
sr.reveal("#missionCard", {
  duration: 1000,
  origin: "top",
  distance: "130px",

  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});

sr.reveal("#visionCard", {
  duration: 1000,
  origin: "top",
  distance: "130px",

  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});

sr.reveal("#founderSection .section-title", {
  duration: 1000,
  origin: "top",
  distance: "130px",
});
sr.reveal("#founderSection .home-btn", {
  duration: 1000,
  origin: "top",
  distance: "130px",
});

sr.reveal("#founder1, #founder2", {
  duration: 1000,
  origin: "top",
  distance: "130px",

  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});

sr.reveal("#founder3, #founder4", {
  duration: 1000,
  origin: "top",
  distance: "130px",

  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});

sr.reveal("#missionVisionSection .btn", {
  duration: 1000,
  origin: "top",
  distance: "130px",

  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});

// Function to check for overflow and apply the class if needed
function checkOverflow(sectionIds) {
  sectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId);

    // Check if the content overflows vertically
    if (section.scrollHeight > section.clientHeight) {
      section.classList.add("overflowed");
    } else {
      section.classList.remove("overflowed");
    }
  });
}
// Run the checkOverflow function on page load and window resize
window.addEventListener("load", () => {
  const sectionIds = [
    "aboutUsSection",
    "founderSection",
    "missionVisionSection",
  ]; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});

window.addEventListener("resize", () => {
  const sectionIds = [
    "aboutUsSection",
    "founderSection",
    "missionVisionSection",
  ]; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});
