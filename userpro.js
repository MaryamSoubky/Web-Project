const form = document.getElementById('profile-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const profilePictureUpload = document.getElementById('profile-picture-upload').files[0];

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

    if (password !== password2) {
        alert('Passwords must match');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const profilePicture = e.target.result;

        // Store the form values and profile picture in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePicture', profilePicture);

        alert('Profile updated successfully!');
        window.location.href = 'user.html';
    };

    if (profilePictureUpload) {
        reader.readAsDataURL(profilePictureUpload);
    } else {
        alert('Please upload a profile picture');
    }
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
