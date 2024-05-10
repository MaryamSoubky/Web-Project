document.getElementById('edit-profile-link').addEventListener('click', function(event) {
     event.preventDefault(); // Prevent the default link behavior
 
     // Show the edit profile form
     var editProfileForm = document.getElementById('edit-profile-form');
     editProfileForm.style.display = 'block';
 
     // Hide the user profile section
     var userProfile = document.getElementById('user-profile');
     userProfile.style.display = 'none';
 
     // Get current profile information
     var name = document.getElementById('user-name').textContent.trim();
     var email = document.getElementById('user-email').textContent.trim();
 
     // Generate input fields for editing
     var inputs = {
         'Name': name,
         'Email': email,
         'Current Password': '', // Add field for current password
         'New Password': '', // Add field for new password
         'Confirm New Password': '' // Add field to confirm new password
     };
 
     // Append input fields to the edit profile form
     editProfileForm.innerHTML = ''; // Clear existing content
     Object.keys(inputs).forEach(function(labelText) {
         var label = document.createElement('label');
         label.textContent = labelText + ': ';
         var input = document.createElement('input');
         input.type = labelText.includes('Password') ? 'password' : 'text'; // Mask password fields
         input.value = inputs[labelText]; // Prefill the input with current value
         input.name = labelText.toLowerCase().replace(/\s/g, ''); // Set the name attribute based on label text
         editProfileForm.appendChild(label);
         editProfileForm.appendChild(input);
         editProfileForm.appendChild(document.createElement('br')); // Add line break
     });
 
     // Add event listener to the form submission
     editProfileForm.addEventListener('submit', function(event) {
         event.preventDefault(); // Prevent the form from submitting
 
         // Get the entered values
         var newName = editProfileForm.querySelector('input[name="name"]').value;
         var newEmail = editProfileForm.querySelector('input[name="email"]').value;
         var currentPassword = editProfileForm.querySelector('input[name="currentpassword"]').value;
         var newPassword = editProfileForm.querySelector('input[name="newpassword"]').value;
         var confirmNewPassword = editProfileForm.querySelector('input[name="confirmnewpassword"]').value;
 
         // Validate the input
         var nameRegex = /^[a-zA-Z\s]+$/;
         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
         if (!nameRegex.test(newName)) {
             alert('Please enter a valid name.');
             return;
         }
 
         if (!emailRegex.test(newEmail)) {
             alert('Please enter a valid email address.');
             return;
         }
 
         if (newPassword !== confirmNewPassword) {
             alert('Passwords do not match.');
             return;
         }
 
         // Verify the current password
         if (!verifyCurrentPassword(currentPassword)) {
             alert('Current password is incorrect.');
             return;
         }
 
         // Update the profile information
         var nameElement = document.getElementById('user-name');
         var emailElement = document.getElementById('user-email');
         nameElement.textContent = newName;
         emailElement.textContent = newEmail;
 
         // Handle password change
         if (newPassword !== '') {
             // Here you can add logic to update the password
             alert('Password changed successfully.');
         }
 
         // Display the user profile again
         editProfileForm.style.display = 'none';
         userProfile.style.display = 'block';
     });
 });