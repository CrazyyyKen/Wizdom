// Function to get the user key (username or email) from session storage
function getUserKey() {
    const userDataJSON = sessionStorage.getItem('userData');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData[0]; // Assuming that the first item in the array is the user's key (username or email)
    }
    return null; // Return null if userData is not found in session storage
} 

// Function to calculate the total number of books rented
function calculateTotalBooksRented(userKey) {
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

        return totalBooksRented;
    }

    return 0; // Return 0 if no history found
}

// Function to retrieve and display user data (username, email, total books rented) in the table
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
            usernameElement.textContent = userData.username;
            const emailElement = document.querySelector("#email");
            emailElement.textContent = userData.email;

            // Calculate and display the total number of books rented
            const totalBooksRented = calculateTotalBooksRented(userKey);
            const totalBooksRentedElement = document.querySelector("#totalBooksRented");
            totalBooksRentedElement.textContent = `${totalBooksRented}`;
        }
    }
}

// Call the function to display user data
displayUserData();


// Function to display user's rental history in the table
function displayRentalHistory() {
    const userKey = getUserKey();
    const userHistoryKey = `${userKey}_history`;
    const userHistoryJSON = localStorage.getItem(userHistoryKey);

    if (userHistoryJSON) {
        const userHistory = JSON.parse(userHistoryJSON);
        const tableBody = document.querySelector("#bookRentalHistory .table tbody");

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

$(document).ready(function () {
    // Initialize Bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Function to display the stored image
    function displayStoredImage() {
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            $('#profile-picture').attr('src', storedImage);
        }
    }

    // Display the stored image on page load
    displayStoredImage();

    // Add click event handler to trigger file input
    $('#profile-picture').click(function () {
        $('#profile-picture-input').click();
    });

    // Add change event handler for file input
    $('#profile-picture-input').change(function () {
        // Handle the selected file here
        const selectedFile = this.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageData = e.target.result;
                $('#profile-picture').attr('src', imageData);

                // Store the image data in local storage
                localStorage.setItem('profileImage', imageData);

                alert('Profile picture selected: ' + selectedFile.name);
            };
            reader.readAsDataURL(selectedFile);
        }
    });
});
