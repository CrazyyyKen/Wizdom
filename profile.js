// Function to get the user key (username or email) from session storage
function getUserKey() {
    const userDataJSON = sessionStorage.getItem('userData');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData[0]; // Assuming that the first item in the array is the user's key (username or email)
    }
    return null; // Return null if userData is not found in session storage
} 

// Function to calculate the total books rented from the user's history
function calculateTotalBooksRented() {
    const userKey = getUserKey(); // Get the user's key (email) from session storage
    const userHistoryKey = `${userKey}_history`; // Create the key for user's history in local storage

    // Retrieve the user's history from local storage
    const userHistoryJSON = localStorage.getItem(userHistoryKey);

    if (userHistoryJSON) {
        const userHistory = JSON.parse(userHistoryJSON);

        // Calculate the total books rented
        let totalBooksRented = 0;
        userHistory.forEach((rentalInfo) => {
            totalBooksRented += rentalInfo.books.length;
        });

        // Display the total books rented in section-info
        const totalRentalElement = document.querySelector("#totalRental");
        totalRentalElement.textContent = `Total Books Rented: ${totalBooksRented}`;
    }
}

// Function to retrieve and display the username and email from local storage
function displayUserData() {
    const userKey = getUserKey(); // Get the user's key (email) from session storage

    // Retrieve the user data array from local storage
    const userDataArrayJSON = localStorage.getItem("userDataArray");

    if (userDataArrayJSON) {
        const userDataArray = JSON.parse(userDataArrayJSON);

        // Find the user data with the matching email
        const userData = userDataArray.find((data) => data.email === userKey);

        if (userData) {
            // Display the username and email
            const usernameElement = document.querySelector("#username");
            usernameElement.textContent += `\nUsername: ${userData.username}`;
            const emailElement = document.querySelector("#email");
            emailElement.textContent += `Email: ${userData.email}`;
        }
    }
}

// Call the functions to calculate total books rented and display user data
calculateTotalBooksRented();
displayUserData();

// Function to display user's rental history in the table
function displayRentalHistory() {
    const userKey = getUserKey();
    const userHistoryKey = `${userKey}_history`;
    const userHistoryJSON = localStorage.getItem(userHistoryKey);

    if (userHistoryJSON) {
        const userHistory = JSON.parse(userHistoryJSON);
        const tableBody = document.querySelector(".table tbody");

        // Clear the table before adding rental history
        tableBody.innerHTML = "";

        // Iterate through each rental record and add it to the table
        userHistory.forEach((rental, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${rental.books.map(book => book.name).join(", ")}</td>
                <td>${rental.startDateTime}</td>
                <td>${rental.dueDate}</td>
            `;

            tableBody.appendChild(row);
        });
    }
}

// Call the function to display rental history when the page loads
displayRentalHistory();
