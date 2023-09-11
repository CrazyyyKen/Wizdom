const loginForm = document.getElementById('signInSection');
const signupForm = document.getElementById('signUpSection');
const loginLink = document.getElementById('signInLink');
const signupLink = document.getElementById('signUpLink');

signupLink.addEventListener('click', (event) => {
    event.preventDefault();
    document.title = 'Sign Up | Wizdom'
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  
    setTimeout(() => {
      loginForm.style.opacity = 0;
      signupForm.style.opacity = 1;
    }, 10);
  });
loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  document.title = 'Sign In | Wizdom'
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';

  setTimeout(() => {
    signupForm.style.opacity = 0;
    loginForm.style.opacity = 1;
  });
});



 $(document).ready(function() {
        // Add event listener for focus on input fields with class form-control
        $('.form-control').on('focus', function() {
            // Find the corresponding label and add the active class to adjust the font size
            $(this).siblings('label').addClass('active');
        });

        // Add event listener for blur (when the input loses focus) on input fields with class form-control
        $('.form-control').on('blur', function() {
            // Find the corresponding label and remove the active class to revert the font size
            $(this).siblings('label').removeClass('active');
        });
    });