// Function to get the user key (username or email) from session storage
function getUserKey() {
    const userDataJSON = sessionStorage.getItem('userData');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData[0]; // Assuming that the first item in the array is the user's key (username or email)
    }
    return null; // Return null if userData is not found in session storage
}

function displayBooksInTable() {
    const userKey = getUserKey();
    const userBagJSON = localStorage.getItem(userKey);
    const tableBody = document.querySelector("#bagTableBody");
    const grandTotalElement = document.getElementById("grandTotal"); // Get the grand total element

    // Clear the table before adding books and reset the grand total
    tableBody.innerHTML = '';
    let grandTotal = 0;

    if (userBagJSON) {
        const userBag = JSON.parse(userBagJSON);

        // Iterate through each book in the user's bag and add to the table
        userBag.forEach((book, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td><img src="${book.coverSrc}" alt="${book.name} Cover" style="height: 100px; width: auto;"></td>
                <td>${book.name}</td>
                <td>RM10</td>
                <td>
                    <button type="button" class="btn home-btn remove-button" data-index="${index}">
                        Remove
                    </button>
                </td>
            `;
            tableBody.appendChild(row);

            grandTotal += 10; // Assuming each book costs RM10
        });
    }

    // Update the grand total element with the calculated total
    grandTotalElement.textContent = `RM${grandTotal}`;

    // Display the book names in the modal
    const bookNamesElement = document.getElementById("bookNames");
    bookNamesElement.textContent = userBag.map(book => book.name).join(", ");
}


function calculateTotalPrice(userBag) {
    let totalPrice = 0;

    // Calculate the total price based on the number of books
    if (userBag && Array.isArray(userBag)) {
        totalPrice = userBag.length * 10; // Assuming each book costs RM10
    }

    return totalPrice;
}




// Function to remove a book from the table and local storage
function removeBookFromTableAndStorage(index) {
    const userKey = getUserKey();
    let userBagJSON = localStorage.getItem(userKey);

    if (userBagJSON) {
        let userBag = JSON.parse(userBagJSON);

        // Remove the book from the user's bag array
        userBag.splice(index, 1);

        // Update local storage with the modified user's bag
        localStorage.setItem(userKey, JSON.stringify(userBag));

        // Re-display books in the table
        displayBooksInTable();
    }
}

// Event delegation for the "Remove" buttons
document.querySelector(".table #bagTableBody").addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        const index = event.target.getAttribute("data-index");
        removeBookFromTableAndStorage(index);
    }
});


// Add event listener to the "Checkout" button
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.addEventListener("click", () => {
    const userKey = getUserKey();
    const userBagJSON = localStorage.getItem(userKey);

    if (!userBagJSON || JSON.parse(userBagJSON).length === 0) {
        alert("Your bag is empty!");
    } else {
        // Show the "CheckOutModal" using Bootstrap modal methods
        const checkOutModal = new bootstrap.Modal(document.getElementById("checkOutModal"));
        checkOutModal.show();

        // Display the book names in the modal
        const userBag = JSON.parse(userBagJSON);
        const bookNamesElement = document.getElementById("bookNamesModal");
        bookNamesElement.innerHTML = userBag.map(book => book.name + "<br>").join("");

        // Calculate and display the total price in the modal
        const totalPriceElement = document.getElementById("totalPrice");
        const totalPrice = calculateTotalPrice(userBag);
        totalPriceElement.textContent = `Total Price: RM${totalPrice}`;

        // Get the current date and time
        const currentDateTime = new Date().toLocaleString();

        // Calculate the due date (1 week after the start date)
        const dueDate = new Date(currentDateTime);
        dueDate.setDate(dueDate.getDate() + 7);

        // After user clicks "Pay & Rent," move books to history and clear the bag
        const payAndRentButton = document.querySelector("#checkOutModal .btn-primary");
        payAndRentButton.addEventListener("click", () => {
            const userHistoryKey = `${userKey}_history`;

            // Get the current user's history from local storage (if it exists)
            let userHistory = localStorage.getItem(userHistoryKey);

            // If the user's history doesn't exist, create an empty array
            if (!userHistory) {
                userHistory = [];
            } else {
                // Parse the existing history if it exists
                userHistory = JSON.parse(userHistory);
            }

            // Add the books from the bag to the user's history along with start date and due date
            const userBag = JSON.parse(userBagJSON);
            const rentalInfo = {
                startDateTime: currentDateTime,
                dueDate: dueDate.toLocaleString(), // Store due date as a string
                books: userBag,
            };

            userHistory.push(rentalInfo);

            // Store the updated user's history in local storage
            localStorage.setItem(userHistoryKey, JSON.stringify(userHistory));

            // Clear the user's bag in local storage
            localStorage.removeItem(userKey);

            // Update the displayed books in the table (clear it)
            const tableBody = document.querySelector("#bagTableBody");
            tableBody.innerHTML = '';

            // Reset the grand total to zero
            const grandTotalElement = document.getElementById("grandTotal");
            grandTotalElement.textContent = 'RM0';

            // Generate and download the PDF receipt
            generatePDF(userKey, rentalInfo);
        });
    }
});

// Function to generate and download the PDF receipt
function generatePDF(userKey, rentalInfo) {
    const pdf = new jsPDF(); // 'p' for portrait mode, 'mm' for millimeters, 'a4' for A4 size

    var img = new Image()
    img.src = 'Media/Logo.png'
    pdf.addImage(img, 'png', 10, 10, 50, 50)

    // Define content for the PDF
    const content = `
        Email: ${userKey}
        Books Rented:
        ${rentalInfo.books.map(book => `
            - Book Name: ${book.name}
            - Starting Date: ${rentalInfo.startDateTime}
            - Due Date: ${rentalInfo.dueDate}
        `).join("\n")}
    `;

    
    
    // Add content to the PDF
    pdf.text(content, 0, 70);

    // Save the PDF with a filename
    pdf.save("rental_receipt.pdf");
}

// Call the function to initially display books in the table
displayBooksInTable();
