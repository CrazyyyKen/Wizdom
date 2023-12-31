window.sr = ScrollReveal({ reset: true, viewFactor: 0.3 });

sr.reveal("#welcomeSection .welcome-text-column", {
  duration: 1500,
  origin: "top",
  distance: "130px",
});
sr.reveal(".intro-book", {
  duration: 1500,
  origin: "top",
  distance: "130px",
});

sr.reveal("#exploreWebSection .container-fluid", {
  duration: 800,
  origin: "top",
  distance: "130px",
});
sr.reveal("#latestPostSection .section-title", {
  duration: 800,
  origin: "top",
  distance: "130px",
});
sr.reveal("#instaPost1", {
  duration: 800,
  origin: "top",
  distance: "130px",
});
sr.reveal("#instaPost2", {
  duration: 800,
  origin: "top",
  distance: "130px",
});
sr.reveal("#latestPostSection .home-btn", {
  duration: 800,
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
    "welcomeSection",
    "exploreWebSection",
    "latestPostSection",
  ]; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});

window.addEventListener("resize", () => {
  const sectionIds = [
    "welcomeSection",
    "exploreWebSection",
    "latestPostSection",
  ]; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});
