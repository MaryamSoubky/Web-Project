// Get the form element
const form = document.getElementById('profile-form');

//event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    // Validate form fields
    if (name === '') {
        alert('Please enter your name');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }
    if (password!==password2) {
        alert('Password must be the same');
        return;
    }

    alert('Form submitted successfully!');
});

 // Function to check if name contains letters
 function containsLetters(name) {
    const letterRegex = /[a-zA-Z]/;
    return letterRegex.test(name);
}

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}