const loginForm = document.getElementById("signInSection");
const signupForm = document.getElementById("signUpSection");
const loginLink = document.getElementById("signInLink");
const signupLink = document.getElementById("signUpLink");

signupLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.title = "Sign Up | Wizdom";
  loginForm.style.display = "none";
  signupForm.style.display = "block";

  setTimeout(() => {
    loginForm.style.opacity = 0;
    signupForm.style.opacity = 1;
  }, 10);
});

loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.title = "Sign In | Wizdom";
  signupForm.style.display = "none";
  loginForm.style.display = "block";

  setTimeout(() => {
    signupForm.style.opacity = 0;
    loginForm.style.opacity = 1;
  });
});

$(document).ready(function () {
  $("#signInEmail").focus();
  // Add event listener for focus on input fields with class form-control
  $(".form-control").on("focus", function () {
    // Find the corresponding label and add the active class to adjust the font size
    $(this).siblings("label").addClass("active");
  });

  // Add event listener for blur (when the input loses focus) on input fields with class form-control
  $(".form-control").on("blur", function () {
    // Find the corresponding label and remove the active class to revert the font size
    $(this).siblings("label").removeClass("active");
  });

  // for sign up page
  $("#signUpUsername").on("keydown", function (event) {
    if (event.keyCode === 13) {
      // Check if Enter key is pressed
      event.preventDefault();
      $("#signUpEmail").focus(); // Move focus to the next input field (Email)
    }
  });

  // Add a keydown event listener to the Email input field
  $("#signUpEmail").on("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      $("#signUpPassword").focus(); // Move focus to the next input field (Password)
    }
  });

  // Add a keydown event listener to the Password input field
  $("#signUpPassword").on("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      saveData(); // Call the saveData function to save the data
    }
  });

  $("#signUpButton").on("click", function (event) {
    event.preventDefault();
    saveData();
  });
  $("#signInEmail").focus();
  // Add event listener to the "Sign in" button
  $("#signInLink").on("click", function (event) {
    $("#emailRequirement").hide();
    $("#passwordRequirement").hide();
    $("#emptyUsername").hide();
    $("#duplicateUsername").hide();
    $("#duplicateEmail").hide();
    $("#signInEmail").focus();
  });

  //for sign in page
  $("#signInEmail").on("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      $("#signInPassword").focus();
    }
  });

  $("#signInPassword").on("keydown", function (event) {
    if (event.keyCode === 13) {
      // Check if Enter key is pressed (key code 13)
      event.preventDefault(); // Prevent the default form submission
      signIn(); // Call the signIn function
    }
  });

  // Add event listener to the Sign-In button (optional, for button click)
  $("#signInButton").on("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    signIn(); // Call the signIn function when the button is clicked
  });

  $("#signUpLink").on("click", function (event) {
    $("#signInEmailRequirement").hide();
    $("#signInPasswordRequirement").hide();
    $("#signUpUsername").focus();
  });
});

function saveData() {
  // Add a keydown event listener to the first input field

  // Get input values
  const username = $("#signUpUsername").val();
  const email = $("#signUpEmail").val();
  const password = $("#signUpPassword").val();

  // Regular expressions for email and password validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Updated email regex
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Updated password regex

  let emailValid = email.match(emailPattern);
  let passwordValid = password.match(passwordPattern);

  let hasError = false;

  if (!emailValid) {
    $("#signUpEmail").val("");
    $("#duplicateEmail").hide();
    $("#emailRequirement").show();
    hasError = true;
  } else {
    $("#emailRequirement").hide();
  }

  if (!passwordValid) {
    $("#signUpPassword").val("");
    $("#passwordRequirement").show();
    hasError = true;
  } else {
    $("#passwordRequirement").hide();
  }

  if (!username) {
    $("#emptyUsername").show();
    $("#duplicateUsername").hide();
    hasError = true;
  } else {
    $("#emptyUsername").hide();
  }

  if (hasError) {
    if (!username) {
      $("#signUpUsername").focus();
    } else if (!emailValid) {
      $("#signUpEmail").focus();
    } else if (!passwordValid) {
      $("#signUpPassword").focus();
    }
    return;
  }

  let userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];
  // Check if a user with the same email or username already exists
  const userExists = userDataArray.some((user) => user.username === username);
  const emailExists = userDataArray.some((user) => user.email === email);

  if (userExists) {
    $("#duplicateUsername").show();
    $("#signUpUsername").val("");

    return;
  } else {
    $("#duplicateUsername").hide();
  }

  if (emailExists) {
    $("#duplicateEmail").show();
    $("#signUpEmail").val("");
    return;
  } else {
    $("#duplicateEmail").hide();
  }

  // If both email and password are valid, proceed to save data
  const userData = {
    username: username,
    email: email,
    password: password,
  };

  userDataArray.push(userData);

  // Save the updated user data array to local storage
  localStorage.setItem("userDataArray", JSON.stringify(userDataArray));
  alert("Signed up successfully!");
  $("#duplicateEmail").hide();
  $("#emailRequirement").hide();
  $("#duplicateUsername").hide();
  $("#emptyUsername").hide();
  $("#passwordRequirement").hide();

  window.location.href = "login.html"; // Redirect to the login page
}

//for sign in
function signIn() {
  // Get email and password input values
  const email = $("#signInEmail").val();
  const password = $("#signInPassword").val();

  // Regular expression to validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const userDataArrayJSON = localStorage.getItem("userDataArray");
  const userDataArray = JSON.parse(userDataArrayJSON) || []; // Use an empty array if localStorage is empty

  // Check if there is a user with matching email and password
  const matchingUser = userDataArray.find(
    (user) => user.email === email && user.password === password
  );
  const matchingEmail = userDataArray.find((user) => user.email === email);
  const matchingPassword = userDataArray.find(
    (user) => user.password === password
  );

  if (matchingUser) {
    const userData = [email, password];
    sessionStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to welcome page after successful log in
    window.location.href = "welcome.html";
  } else if (!matchingEmail && email == email.match(emailPattern)) {
    alert("You haven't signed up before. Please sign up first.");
    if (email == email.match(emailPattern)) {
      $("#signInEmailRequirement").hide();
      $("#signInPasswordRequirement").hide();
    }
    $("#signInEmail").val("");
    $("#signInPassword").val("");
    $("#signInEmail").focus();
  } else if (matchingEmail && !matchingPassword) {
    $("#signInEmailRequirement").hide();
    $("#signInPasswordRequirement").show();
    $("#signInPassword").val("");
  } else {
    // Incorrect email format and password
    $("#signInEmailRequirement").show();
    $("#signInPasswordRequirement").show();
    $("#signInEmail").val("");
    $("#signInPassword").val("");
    $("#signInEmail").focus();
  }
}

// Function to check for overflow and apply the class if needed
function checkOverflow(sectionIds) {
  sectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId);

    // Check if the content overflows vertically
    if (section.scrollHeight > section.clientHeight) {
      section.classList.add("overflowed");
    } else {
      section.classList.remove("overflowed");
    }
  });
}
// Run the checkOverflow function on page load and window resize
window.addEventListener("load", () => {
  const sectionIds = [
    "loginSection",
  ]; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});

window.addEventListener("resize", () => {
  const sectionIds = [
    "aboutUsSection",
  ]; // Add IDs of all sections to check
  checkOverflow(sectionIds);
});