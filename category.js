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

    // Show the modal
    modal.show();
}

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

