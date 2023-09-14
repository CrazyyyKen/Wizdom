// Function to get the user key (username or email) from session storage
function getUserKey() {
    const userDataJSON = sessionStorage.getItem('userData');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData[0]; // Assuming that the first item in the array is the user's key (username or email)
    }
    return null; // Return null if userData is not found in session storage
} 

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
