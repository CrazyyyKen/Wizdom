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

function updateNavLinksHref(breakpoint) {
    // Get the screen width
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

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
updateNavLinksHref(1000);

// Function to prevent going back
function noBack() {
    window.history.forward();
}

// Function to handle logout
function logoutAndPreventBack() {
    // Perform logout actions here

    // Prevent going back
    noBack();

    // Redirect to the login page
    window.location.replace('login.html');
}

// Attach the logoutAndPreventBack function to the button click event
document.getElementById('logoutLink').addEventListener('click', logoutAndPreventBack);