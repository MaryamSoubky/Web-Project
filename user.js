const userProfile = document.getElementById('user-profile');
const profileInfo = document.getElementById('profile-info');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }})

// Retrieve user information from localStorage
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const profilePicture = localStorage.getItem('profilePicture');

// Update profile picture
if (profilePicture) {
    document.getElementById('profile-picture').src = profilePicture;
}

// Update profile information
if (name) {
    document.getElementById('profile-name').textContent = name;
}
if (email) {
    document.getElementById('profile-email').textContent = email;
}

// Toggle dropdown visibility when clicking on profile picture
userProfile.addEventListener('click', () => {
    profileInfo.style.display = (profileInfo.style.display === 'block') ? 'none' : 'block';
});

// Hide dropdown if clicked outside of the profile area
window.addEventListener('click', (event) => {
    if (!userProfile.contains(event.target)) {
        profileInfo.style.display = 'none';
    }
});

// Logout functionality
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('profilePicture');
    window.location.href = 'userpro.html'; // Redirect to login or profile edit page
});
