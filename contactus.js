document.addEventListener("DOMContentLoaded", function() {
  // Initialize Firebase and set up your Firebase-related code here
  const firebaseConfig = {
    apiKey: "AIzaSyDis6lCRImPcAlNGayvrqwKMf8BrXbnDhA",
    authDomain: "wizdom-226be.firebaseapp.com",
    projectId: "wizdom-226be",
    storageBucket: "wizdom-226be.appspot.com",
    messagingSenderId: "198802197917",
    appId: "1:198802197917:web:7d697711fa4a8bdd1e7374",
    measurementId: "G-NLQD1K8H4J"
  };
  
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firestore database
  const db = firebase.firestore();

});
window.sr = ScrollReveal({ reset: true, viewFactor: 0.3 });

sr.reveal('#locationColumn', {
  duration: 1000,
  origin: 'left',
  distance: '100px',
  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});

sr.reveal('#inquiryFormColumn', {
  duration: 1000,
  origin: 'right',
  distance: '100px',
  // Set this to true to repeat the animation
  // Set the delay between repeats in milliseconds (optional)
});

$(document).ready(function() {


  $('#submitForm').click(function() {
      // Retrieve form data
      const firstName = $('#firstNameInput').val();
      const lastName = $('#lastNameInput').val();
      const phoneNumber = $('#phoneNumberInput').val();
      const email = $('#emailInput').val();
      const comments = $('#commentsInput').val();

      // Input validation
      if (firstName === '') {
          $("#feedbackFirstName").show();
          return; 
      } else {
          $("#feedbackFirstName").hide();
      }

      if (lastName === '') {
          $("#feedbackLastName").show();
          return; 
      } else {
          $("#feedbackLastName").hide();
      }

      const phonePattern = /^\d{10}$/;
      if (!phoneNumber.match(phonePattern)) {
          $("#feedbackPhoneNumberFormat").show();
          return; 
      } else {
          $("#feedbackPhoneNumberFormat").hide();
      }

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.match(emailPattern)) {
          $("#feedbackEmailFormat").show();
          return; 
      } else {
          $("#feedbackEmailFormat").hide();
      }

      if (comments === '') {
          $("#feedbackComments").show();
          return; 
      } else {
          $("#feedbackComments").hide();
      }

      // Create a data object to send to the server
      const formData = {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          comments: comments
      };

      // Save the form data to Firebase Firestore 
      db.collection("feedback")
          .add(formData)
          .then(() => {
              alert("Thank you for your feedback. We appreciate your input and will review it shortly.");
              // Clear form fields
              $('#firstNameInput').val('');
              $('#lastNameInput').val('');
              $('#phoneNumberInput').val('');
              $('#emailInput').val('');
              $('#commentsInput').val('');
          })
          .catch((error) => {
              console.error("Error adding document: ", error);
          });

      return false;
  });
});
