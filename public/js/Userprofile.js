const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
});
document.getElementById('edit-profile-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the edit profile form
    var editProfileForm = document.getElementById('edit-profile-form');
    editProfileForm.style.display = 'block';

    // Hide the user profile section
    var userProfile = document.getElementById('user-profile');
    userProfile.style.display = 'none';

    //  labels for the edit profile form
    var labels = ['Name', 'Email', 'Password'];
    var editProfileLabels = document.createElement('div');
    labels.forEach(function(labelText) {
        var label = document.createElement('label');
        label.textContent = labelText + ': ';
        var input = document.createElement('input');
        input.type = 'text'; 
        input.name = labelText.toLowerCase(); 
        editProfileLabels.appendChild(label);
        editProfileLabels.appendChild(input);
        editProfileLabels.appendChild(document.createElement('br')); 
    });

    // labels to the edit the profile form
    editProfileForm.innerHTML = ''; // Clear existing content
    editProfileForm.appendChild(editProfileLabels);
});