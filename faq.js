window.sr = ScrollReveal({ reset: true, viewFactor: 0.3 });

sr.reveal("#faqSection .container-fluid", {
  duration: 1000,
  origin: "top",
  distance: "130px",
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
    "faqSection",
  ]; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});

window.addEventListener("resize", () => {
  const sectionIds = [
    "faqSection",
  ]; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});