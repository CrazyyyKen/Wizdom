// Function to clear the URL hash on page load
function clearUrlHash() {
  if (window.location.hash !== "") {
    history.replaceState(null, document.title, window.location.pathname);
  }
}

// Function to update the navigation links based on screen width
function updateNavLinksHref(breakpoint) {
  // Get the screen width
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Get the link elements
  const exploreLink = document.getElementById("exploreLink");
  const historyLink = document.getElementById("historyLink");
  const thrillerLink = document.getElementById("thrillerLink");

  if (screenWidth <= breakpoint) {
    // Set the href attributes to the smaller sections
    exploreLink.href = `categories.html#exploreSectionSmall`;
    historyLink.href = `categories.html#historySectionSmall`;
    thrillerLink.href = `categories.html#thrillerSectionSmall`;
  } else {
    // Set the href attributes to the larger sections
    exploreLink.href = `categories.html#exploreSection`;
    historyLink.href = `categories.html#historySection`;
    thrillerLink.href = `categories.html#thrillerSection`;
  }
}

// Function to handle scroll event
function handleScroll() {
  // Check the scroll position
  if (window.scrollY > 10) {
    // Get navbar element
    const navbar = document.getElementById("navbar");
    // Add the "navbar-scrolled" class to change the color
    navbar.classList.add("navbar-scrolled");
  } else {
    // Remove the "navbar-scrolled" class
    navbar.classList.remove("navbar-scrolled");
  }
}

// Function to prevent going back
function noBack() {
  window.history.forward();
}

// Function to handle logout
function logoutAndRedirect() {
  // Perform logout actions here

  // Redirect to the login page
  window.location.replace("login.html");
}

window.addEventListener("load", () => {
  updateNavLinksHref(1000); // Update navigation links on page load and window resize
  handleScroll(); // Check scroll position on page load
  noBack(); // Prevent going back on page load
  clearUrlHash(); // Clear URL hash on page load
});

// Listen for the scroll event and call the handleScroll function
window.addEventListener("scroll", handleScroll);

// Attach the logoutAndRedirect function to the button click event
document
  .getElementById("logoutLink")
  .addEventListener("click", logoutAndRedirect);

window.addEventListener("resize", () => {
  updateNavLinksHref(1000); // Call it when the window is resized
});
