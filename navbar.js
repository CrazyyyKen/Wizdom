// Get navbar element
const navbar = document.getElementById("navbar");

// Function to handle scroll event
function handleScroll() {

    // Check the scroll position
    if (window.scrollY > 10) {

        // Add the "navbar-scrolled" class to change the color
        navbar.classList.add("navbar-scrolled");

    } else {

        // Remove the "navbar-scrolled" class
        navbar.classList.remove("navbar-scrolled");

    }
}

// Listen for the scroll event and call the handleScroll function
window.addEventListener("scroll", handleScroll);