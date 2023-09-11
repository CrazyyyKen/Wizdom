// Generate book container
function generateBook(bookCoverSrc) {
    return `
        <div class="book" style="cursor: pointer;">
            <div class="book-cover">
                <img src="${bookCoverSrc}" style="height: 100%; width: 100%;" class="img-fluid">
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

loopClassName("romanceBook1", "Media/RomanceBookCover1.jpeg")
loopClassName("romanceBook2", "Media/RomanceBookCover2.jpg")
loopClassName("romanceBook3", "Media/RomanceBookCover3.webp")
loopClassName("romanceBook4", "Media/RomanceBookCover4.webp")
loopClassName("romanceBook5", "Media/RomanceBookCover5.webp")
loopClassName("romanceBook6", "Media/RomanceBookCover6.webp")

loopClassName("fantasyBook1", "Media/FantasyBookCover1.jpeg")
loopClassName("fantasyBook2", "Media/FantasyBookCover2.jpeg")
loopClassName("fantasyBook3", "Media/FantasyBookCover3.webp")
loopClassName("fantasyBook4", "Media/FantasyBookCover4.webp")
loopClassName("fantasyBook5", "Media/FantasyBookCover5.webp")
loopClassName("fantasyBook6", "Media/FantasyBookCover6.webp")

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

loopClassNameModal("romanceBook1", "Book Title", "Media/RomanceBookCover1.jpeg", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("romanceBook2", "Book Title", "Media/RomanceBookCover2.jpg", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("romanceBook3", "Book Title", "Media/RomanceBookCover3.webp", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("romanceBook4", "Book Title", "Media/RomanceBookCover4.webp", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("romanceBook5", "Book Title", "Media/RomanceBookCover5.webp", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("romanceBook6", "Book Title", "Media/RomanceBookCover6.webp", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")

loopClassNameModal("fantasyBook1", "Book Title", "Media/FantasyBookCover1.jpeg", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("fantasyBook2", "Book Title", "Media/FantasyBookCover2.jpeg", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("fantasyBook3", "Book Title", "Media/FantasyBookCover3.webp", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("fantasyBook4", "Book Title", "Media/FantasyBookCover4.webp", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("fantasyBook5", "Book Title", "Media/FantasyBookCover5.webp", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")
loopClassNameModal("fantasyBook6", "Book Title", "Media/FantasyBookCover6.webp", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.")

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


window.sr = ScrollReveal();
sr.reveal('#exploreSection .section-title, #romanceSection .section-title, #fantasySection .section-title', {
  duration: 1200,
  origin: 'top',
  distance: '130px',
  viewFactor: 0.3,
  reset: true, // Set this to true to repeat the animation
  interval: 1000, // Set the delay between repeats in milliseconds (optional)
});
sr.reveal('#exploreSection .section-info, #romanceSection .section-info, #fantasySection .section-info', {
    duration: 1200,
    origin: 'top',
    distance: '150px',
    viewFactor: 0.3,
    reset: true, // Set this to true to repeat the animation
    interval: 1000, // Set the delay between repeats in milliseconds (optional)
  });
sr.reveal('#exploreSection .book-carousel, #romanceSection .book-carousel, #fantasySection .book-carousel', {
    duration: 1200,
    origin: 'top',
    distance: '100px',
    viewFactor: 0.3,
    reset: true, // Set this to true to repeat the animation
    interval: 1000, // Set the delay between repeats in milliseconds (optional)
  });

  sr.reveal('#exploreSection .home-btn, #romanceSection .home-btn, #fantasySection .home-btn', {
    duration: 1200,
    origin: 'top',
    distance: '50px',
    viewFactor: 0.3,
    reset: true, // Set this to true to repeat the animation
    interval: 1000, // Set the delay between repeats in milliseconds (optional)
  });