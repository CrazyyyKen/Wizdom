// Function to get the user key (username or email) from session storage
function getUserKey() {
    const userDataJSON = sessionStorage.getItem('userData');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData[0]; // Assuming that the first item in the array is the user's key (username or email)
    }
    return null; // Return null if userData is not found in session storage
}

function storeProfilePicture(userEmail, imageData) {
    const userDataArrayJSON = localStorage.getItem('userDataArray');
    const userDataArray = JSON.parse(userDataArrayJSON);

    // Find the user data with the matching email
    const matchingUserData = userDataArray.find((userData) => userData.email === userEmail);

    if (matchingUserData) {
        // Update the user data with the new profile image
        matchingUserData.profileImage = imageData;

        // Update the userDataArray in local storage
        localStorage.setItem('userDataArray', JSON.stringify(userDataArray));
    }

    // Store the image data in Local Storage with the user's email as the key
    localStorage.setItem(userEmail, imageData);
}

// Function to calculate the total number of books rented
function calculateTotalBooksRented(userKey) {
    const userHistoryKey = `${userKey}_history`; // Create the key for the user's history in local storage

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

    return 0; // Return 0 if no history is found
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
    const userKey = getUserKey(); // Get the user's key (email) from session storage
    userProfilePicKey = `${userKey}_profilepic`;

    if (userKey) {
        // User key is available, you can use it here

        const userDataArrayJSON = localStorage.getItem('userDataArray');
        const userDataArray = JSON.parse(userDataArrayJSON);

        // Find the user data with the matching email
        const matchingUserData = userDataArray.find((userData) => userData.email === userKey);

        if (matchingUserData) {
            // Load the profile picture from local storage
            loadProfilePicture(userProfilePicKey);

            // Add click event handler to trigger file input
            $('#profilePicture').click(function () {
                $('#ProfilePictureInput').click();
            });

            // Add change event handler for file input
            $('#ProfilePictureInput').change(function () {
                // Handle the selected file here
                const selectedFile = this.files[0];

                if (selectedFile) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const imageData = e.target.result;
                        $('#profilePicture').attr('src', imageData);

                        // Store the image data in local storage and user data
                        storeProfilePicture(userProfilePicKey, imageData);

                        alert('Profile picture has been changed and saved successfully.');
                    };
                    reader.readAsDataURL(selectedFile);
                }
            });
        }
    } 

});

// Function to load the profile picture from local storage
function loadProfilePicture(userEmail) {
    const storedImage = localStorage.getItem(userEmail); // Retrieve the image data associated with the user's email
    if (storedImage) {
        $('#profilePicture').attr('src', storedImage);
    }
}

// Call the function to load the profile picture when the page loads
loadProfilePicture(userProfilePicKey);
