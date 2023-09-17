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


// Attach event listeners
window.addEventListener("load", () => {
  // Listen for the scroll event and call the handleScroll function
  window.addEventListener("scroll", handleScroll);

  handleScroll(); // Check scroll position on page load

  // Attach the logoutAndPreventBack function to the logout button click event
  document
    .getElementById("logoutLink")
    .addEventListener("click", function(){window.location.href = "login.html"});
});
