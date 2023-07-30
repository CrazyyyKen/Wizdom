// Show modal on page load
$(window).on('load', function () {
    $('#guideModal').modal('show');
});

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

// Trigger fade-in and fade-out effect based on the viewport height
$(document).ready(function () {

    // Function to check if an element is in the viewport
    function is70PercentInViewport(element) {
        var rect = element.getBoundingClientRect();
        var viewportHeight = window.innerHeight;
        var elementHeight = rect.bottom - rect.top;

        // 50% threshold
        var threshold = 0.5; 

        return rect.bottom >= viewportHeight * (1 - threshold) && rect.top <= viewportHeight * threshold;
    }

    // Function to handle the fade-in effect
    function handleFadeIn() {
        $(".fade-in-section").each(function () {
            if (is70PercentInViewport(this)) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    // Trigger the fade-in effect on initial load
    handleFadeIn();

    // Trigger the fade-in effect when the user scrolls
    $(window).on("scroll", function () {
        handleFadeIn();
    });
    
});

// Generate book container
function generateBook(bookCoverSrc) {
    return `
        <div class="book" style="cursor: pointer;">
            <div class="book-cover">
                <img src="${bookCoverSrc}" style="height: 100%; width: 100%;">
            </div>
            <div class="book-content"></div>
        </div>
    `;
}

// Generate book for every class passed into the function
function loopClassName(className, imagesrc) {
    const collection = document.getElementsByClassName(className);
    for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = generateBook(imagesrc);
    }
}

loopClassName("romanceBook1", "Images/RomanceBookCover1.jpeg")
loopClassName("romanceBook2", "Images/RomanceBookCover2.jpg")
loopClassName("romanceBook3", "Images/RomanceBookCover3.webp")
loopClassName("romanceBook4", "Images/RomanceBookCover4.webp")
loopClassName("romanceBook5", "Images/RomanceBookCover5.webp")
loopClassName("romanceBook6", "Images/RomanceBookCover6.webp")

loopClassName("fantasyBook1", "Images/FantasyBookCover1.jpeg")
loopClassName("fantasyBook2", "Images/FantasyBookCover2.jpeg")
loopClassName("fantasyBook3", "Images/FantasyBookCover3.webp")
loopClassName("fantasyBook4", "Images/FantasyBookCover4.webp")
loopClassName("fantasyBook5", "Images/FantasyBookCover5.webp")
loopClassName("fantasyBook6", "Images/FantasyBookCover6.webp")

// Open modal function
function openModal(bookName, bookCoverSrc, bookInfo) {

    // Create a new modal
    const modal = new bootstrap.Modal(document.getElementById("bookInfoModal"));

    // Set the modal header
    const modalTitle = document.querySelector("#bookInfoModal .modal-title");
    modalTitle.innerText = bookName;

    // Set the book cover image
    const bookCoverImage = document.querySelector("#bookInfoModal .book-cover");
    bookCoverImage.innerHTML = `<img src="${bookCoverSrc}" style="height: 100%; width: 100%;" alt="${bookName} Cover">`;

    // Set the modal content
    const bookInfoContent = document.querySelector("#bookInfoModal .book-info");
    bookInfoContent.innerText = bookInfo;

    // Show the modal
    modal.show();
}

// Generate modal for every class passed into the function
function loopClassNameModal(className, bookName, bookCoverSrc, bookInfo) {
    const collection = document.getElementsByClassName(className);
    for (let i = 0; i < collection.length; i++) {
        collection[i].addEventListener("click", function () {
            openModal(
                bookName,
                bookCoverSrc,
                bookInfo
            );
        });
    }

}

loopClassNameModal("romanceBook1", "Book Title", "Images/RomanceBookCover1.jpeg", "Description of book.")
loopClassNameModal("romanceBook2", "Book Title", "Images/RomanceBookCover2.jpg", "Description of book.")
loopClassNameModal("romanceBook3", "Book Title", "Images/RomanceBookCover3.webp", "Description of book.")
loopClassNameModal("romanceBook4", "Book Title", "Images/RomanceBookCover4.webp", "Description of book.")
loopClassNameModal("romanceBook5", "Book Title", "Images/RomanceBookCover5.webp", "Description of book.")
loopClassNameModal("romanceBook6", "Book Title", "Images/RomanceBookCover6.webp", "Description of book.")

loopClassNameModal("fantasyBook1", "Book Title", "Images/FantasyBookCover1.jpeg", "Description of book.")
loopClassNameModal("fantasyBook2", "Book Title", "Images/FantasyBookCover2.jpeg", "Description of book.")
loopClassNameModal("fantasyBook3", "Book Title", "Images/FantasyBookCover3.webp", "Description of book.")
loopClassNameModal("fantasyBook4", "Book Title", "Images/FantasyBookCover4.webp", "Description of book.")
loopClassNameModal("fantasyBook5", "Book Title", "Images/FantasyBookCover5.webp", "Description of book.")
loopClassNameModal("fantasyBook6", "Book Title", "Images/FantasyBookCover6.webp", "Description of book.")

// Plus and minus clicks event listener
document.addEventListener('DOMContentLoaded', function () {

    // Function to handle minus button click
    function handleMinusClick() {
        var input = this.nextElementSibling;
        var count = parseInt(input.value) - 1;
        count = count < 1 ? 1 : count;
        input.value = count;
        input.dispatchEvent(new Event('change'));
    }

    // Function to handle plus button click
    function handlePlusClick() {
        var input = this.previousElementSibling;
        input.value = parseInt(input.value) + 1;
        input.dispatchEvent(new Event('change'));
    }

    // Attach event listeners to minus and plus buttons inside the modal
    var minusButtons = document.querySelectorAll('.modal .minus');
    var plusButtons = document.querySelectorAll('.modal .plus');

    minusButtons.forEach(function (button) {
        button.addEventListener('click', handleMinusClick);
    });

    plusButtons.forEach(function (button) {
        button.addEventListener('click', handlePlusClick);
    });
});