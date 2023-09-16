window.sr = ScrollReveal({ reset: true, viewFactor: 0.3 });

sr.reveal("#locationColumn", {
  duration: 1000,
  origin: "left",
  distance: "100px",
  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});

sr.reveal("#inquiryFormColumn", {
  duration: 1000,
  origin: "right",
  distance: "100px",
  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});

$(document).ready(function () {
  $("#firstNameInput");
  $("#firstNameInput").on("keydown", function (event) {
    if (event.keyCode === 13) {
      // Check if Enter key is pressed
      event.preventDefault();
      // Move focus to the next input field (last name)
      $("#lastNameInput").focus();
    }
  });

  // Add a keydown event listener to the last name input field
  $("#lastNameInput").on("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      // Move focus to the next input field (phone number)
      $("#phoneNumberInput").focus();
    }
  });

  // Add a keydown event listener to the phone number input field
  $("#phoneNumberInput").on("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      // Move focus to the next input field (email)
      $("#emailInput").focus();
    }
  });

  // Add a keydown event listener to the email input field
  $("#emailInput").on("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      // Move focus to the next input field (comments)
      $("#commentsInput").focus();
    }
  });

  // Add a keydown event listener to the comments input field
  $("#commentsInput").on("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      $("#submitForm").click();
    }
  });

  $(document).ready(function () {
    $("#submitForm").click(function () {
      // Retrieve form data
      const firstName = $("#firstNameInput").val();
      const lastName = $("#lastNameInput").val();
      const phoneNumber = $("#phoneNumberInput").val();
      const email = $("#emailInput").val();
      const comments = $("#commentsInput").val();
      let hasError = false;

      // Input validation
      if (firstName === "") {
        $("#feedbackFirstName").show();
        hasError = true;
      } else {
        $("#feedbackFirstName").hide();
      }

      if (lastName === "") {
        $("#feedbackLastName").show();
        hasError = true;
      } else {
        $("#feedbackLastName").hide();
      }

      const phonePattern = /^\d{10}$/;
      if (!phoneNumber.match(phonePattern)) {
        $("#feedbackPhoneNumberFormat").show();
        $("#phoneNumberInput").val("");
        hasError = true;
      } else {
        $("#feedbackPhoneNumberFormat").hide();
      }

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.match(emailPattern)) {
        $("#feedbackEmailFormat").show();
        $("#emailInput").val("");
        hasError = true;
      } else {
        $("#feedbackEmailFormat").hide();
      }

      if (comments === "") {
        $("#feedbackComments").show();
        hasError = true;
      } else {
        $("#feedbackComments").hide();
      }

      if (hasError) {
        if (!firstName) {
          $("#firstNameInput").focus();
        } else if (!lastName) {
          $("#lastNameInput").focus();
        } else if (!phoneNumber) {
          $("#phoneNumberInput").focus();
        } else if (!email) {
          $("#emailInput").focus();
        } else if (!comments) {
          $("#commentsInput").focus();
        }
        return;
      }

      // Create a data object to send to the server
      const formData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        comments: comments,
      };

      // Send the data to Google Sheets using AJAX
      $.ajax({
        url: "https://api.apispreadsheets.com/data/1nPPosO6vfR7DT95/",
        type: "POST",
        data: formData,
        success: function (response) {
          console.log("Data sent successfully");
          // Optionally, you can clear the form fields after successful submission
          $("#firstNameInput").val("");
          $("#lastNameInput").val("");
          $("#phoneNumberInput").val("");
          $("#emailInput").val("");
          $("#commentsInput").val("");
        },
        error: function (error) {
          console.error("Error sending data:", error);
        },
      });
    });
  });
});

$("#instaLink").socialSharingPlugin({
  urlShare: window.location.href,
  description: $("meta[name=description]").attr("content"),
  title: $("title").text(),
});
