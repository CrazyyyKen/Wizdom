// Function to fetch book data from the JSON file using a RESTful API
function fetchBookData(callback) {
    const githubRawUrl = "https://raw.githubusercontent.com/CrazyyyKen/Wizdom/main/json/books.json";

    fetch(githubRawUrl, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error fetching book data:', error));

}

// Generate book container
function generateBook(bookData, bookDescription) {
    return `
        <div class="book" style="cursor: pointer;">
            <div class="book-cover">
                <img src="${bookData.coverSrc}" style="height: 100%; width: 100%;" class="img-fluid" alt="${bookData.name} Cover">
            </div>
            <div class="book-content" data-description="${bookDescription}"></div>
        </div>
    `;
}

// Open modal function
function openModal(bookName, bookCoverSrc, bookDescription) {
    // Create a new modal
    const modal = new bootstrap.Modal(document.getElementById("bookInfoModal"));

    // Set the modal header
    const modalTitle = document.querySelector("#bookInfoModal .modal-title");
    modalTitle.innerText = bookName;

    // Set the book cover image
    const bookCoverImage = document.querySelector("#bookInfoModal .book-cover");
    bookCoverImage.innerHTML = `<img src="${bookCoverSrc}" style="height: 100%; width: 100%;" alt="${bookName} Cover">`;

    // Set the modal content (book description)
    const bookInfoContent = document.querySelector("#bookInfoModal .book-info");
    bookInfoContent.innerText = bookDescription;

    const addToBagButton = document.querySelector("#bookInfoModal .btn-primary");
    addToBagButton.dataset.bookName = bookName; // Set the book name
    addToBagButton.dataset.bookCoverSrc = bookCoverSrc; // Set the book desc

    // Show the modal
    modal.show();
}

// Function to get the user key (username or email) from session storage
function getUserKey() {
    const userDataJSON = sessionStorage.getItem('userData');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData[0]; // Assuming that the first item in the array is the user's key (username or email)
    }
    return null; // Return null if userData is not found in session storage
}

function addToBag(bookName, bookCoverSrc) {
    // Get the user's username or email (you need to obtain this when the user logs in)
    const userKey = getUserKey(); // Replace with your logic to get the user's key

    // Get the current user's bag from local storage (if it exists)
    let userBag = localStorage.getItem(userKey);

    // If the user's bag doesn't exist, create an empty array
    if (!userBag) {
        userBag = [];
    } else {
        // Parse the existing bag if it exists
        userBag = JSON.parse(userBag);
    }

    // Check if the book is already in the user's bag
    const isBookAlreadyAdded = userBag.some((book) => book.name === bookName);

    if (isBookAlreadyAdded) {
        alert(`"${bookName}" is already in your bag.`);
    } else {
        // Check if the book is in the user's history and the due date hasn't passed
        const userHistoryKey = `${userKey}_history`;
        const userHistoryJSON = localStorage.getItem(userHistoryKey);

        if (userHistoryJSON) {
            const userHistory = JSON.parse(userHistoryJSON);

            const isBookInHistory = userHistory.some((history) => {
                return history.books.some((book) => book.name === bookName);
            });

            if (isBookInHistory) {
                // Check the due date of the book
                const currentDate = new Date();
                const bookHistory = userHistory.find((history) => {
                    return history.books.some((book) => book.name === bookName);
                });

                if (currentDate < new Date(bookHistory.dueDate)) {
                    alert(`You can't add "${bookName}" to your bag. Due date has not passed.`);
                    return;
                }
            }
        }

        // Add the new book to the user's bag
        userBag.push({ name: bookName, coverSrc: bookCoverSrc });

        // Store the updated user's bag in local storage
        localStorage.setItem(userKey, JSON.stringify(userBag));

        alert(`Added "${bookName}" to your bag.`);
    }
}


// Add event listener to the "Add to Bag" button outside of generateBook2
document.getElementById("bookInfoModal").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
        const bookName = event.target.dataset.bookName;
        const bookCoverSrc = document.querySelector("#bookInfoModal img").src; // Get the book cover image source
        addToBag(bookName, bookCoverSrc); // Pass bookCoverSrc instead of book description

        const modal = bootstrap.Modal.getInstance(document.getElementById("bookInfoModal"));
        modal.hide(); // Close the modal after adding to the bag
    }
});

// Generate book for every class passed into the function and add click event listeners
function generateBook2(category, className, index) {
    fetchBookData(data => {
        const books = data[category];
        const elements = document.querySelectorAll(`.${className}`);

        elements.forEach((element) => {
            element.innerHTML = generateBook(books[index], books[index].description);
            element.addEventListener("click", () => {
                openModal(books[index].name, books[index].coverSrc, books[index].description);
            });
        });
    });
}

generateBook2("historyBooks", "historyBook1", 0);
generateBook2("historyBooks", "historyBook2", 1);
generateBook2("historyBooks", "historyBook3", 2);
generateBook2("historyBooks", "historyBook4", 3);
generateBook2("historyBooks", "historyBook5", 4);
generateBook2("historyBooks", "historyBook6", 5);

generateBook2("thrillerBooks", "thrillerBook1", 0);
generateBook2("thrillerBooks", "thrillerBook2", 1);
generateBook2("thrillerBooks", "thrillerBook3", 2);
generateBook2("thrillerBooks", "thrillerBook4", 3);
generateBook2("thrillerBooks", "thrillerBook5", 4);
generateBook2("thrillerBooks", "thrillerBook6", 5);




window.sr = ScrollReveal();
sr.reveal('#exploreSection .section-title, #historySection .section-title, #thrillerSection .section-title', {
    duration: 1200,
    origin: 'top',
    distance: '130px',
    viewFactor: 0.3,
    reset: true, // Set this to true to repeat the animation
    interval: 1000, // Set the delay between repeats in milliseconds (optional)
});
sr.reveal('#exploreSection .section-info, #historySection .section-info, #thrillerSection .section-info', {
    duration: 1200,
    origin: 'top',
    distance: '150px',
    viewFactor: 0.3,
    reset: true, // Set this to true to repeat the animation
    interval: 1000, // Set the delay between repeats in milliseconds (optional)
});
sr.reveal('#exploreSection .book-carousel, #historySection .book-carousel, #thrillerSection .book-carousel', {
    duration: 1200,
    origin: 'top',
    distance: '100px',
    viewFactor: 0.3,
    reset: true, // Set this to true to repeat the animation
    interval: 1000, // Set the delay between repeats in milliseconds (optional)
});

sr.reveal('#exploreSection .home-btn, #historySection .home-btn, #thrillerSection .home-btn', {
    duration: 1200,
    origin: 'top',
    distance: '50px',
    viewFactor: 0.3,
    reset: true, // Set this to true to repeat the animation
    interval: 1000, // Set the delay between repeats in milliseconds (optional)
});

// Run the checkOverflow function on page load and window resize
window.addEventListener('load', () => {
    const sectionIds = ['exploreSection', 'historySection', 'thrillerSection']; // Add IDs of all sections to check
    checkOverflow(sectionIds);
  });
  
  window.addEventListener('resize', () => {
    const sectionIds = ['exploreSection', 'historySection', 'thrillerSection']; // Add IDs of all sections to check
    checkOverflow(sectionIds);
  });
  
  // Function to toggle the visibility of the sections based on screen width
  function toggleSections(categoryId, smallCategoryId, breakpoint) {
    const categorySection = document.getElementById(categoryId);
    const smallCategorySection = document.getElementById(smallCategoryId);

    // Get the screen width
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Determine whether to show the larger or smaller section based on screen width and the specified breakpoint
    if (screenWidth <= breakpoint) {
        categorySection.style.display = "none"; // Hide larger section
        smallCategorySection.style.display = "block"; // Show smaller section
    } else {
        categorySection.style.display = "block"; // Show larger section
        smallCategorySection.style.display = "none"; // Hide smaller section
    }

    // Scroll the page slightly to trigger the layout
    window.scrollBy(0, 1);
}

// Call the toggleSections function for different categories and breakpoints
window.addEventListener("load", () => {
    // Example usage for the "Thriller" category
    toggleSections("thrillerSection", "thrillerSectionSmall", 1000);

    // Example usage for the "History" category
    toggleSections("historySection", "historySectionSmall", 1000);

    toggleSections("exploreSection", "exploreSectionSmall", 1000);
});

window.addEventListener("resize", () => {
    // Example usage for the "Thriller" category
    toggleSections("thrillerSection", "thrillerSectionSmall", 1000);

    // Example usage for the "History" category
    toggleSections("historySection", "historySectionSmall", 1000);

    toggleSections("exploreSection", "exploreSectionSmall", 1000);
});

