document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  if (!checkinputs()) {
    return; // If there are validation errors, stop the form submission
  }

  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const mess = document.getElementById("message");
  const fileInput = document.getElementById("file");

  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      const base64File = event.target.result.split(',')[1];

      sendEmail(bodyMessage, subject.value, file.name, base64File);
    };

    reader.readAsDataURL(file);
  } else {
    sendEmail(bodyMessage, subject.value);
  }
});

function sendEmail(bodyMessage, subject, fileName = null, base64File = null) {
  const emailOptions = {
    SecureToken: "f07bd2e4-a549-4902-a585-c7b119ad5fbf",
    To: 'booklyy.store@gmail.com',
    From: "booklyy.store@gmail.com",
    Subject: subject,
    Body: bodyMessage
  };

  if (fileName && base64File) {
    emailOptions.Attachments = [
      {
        name: fileName,
        data: base64File
      }
    ];
  }

  Email.send(emailOptions).then(
    message => {
      if (message === "OK") {
        Swal.fire({
          title: "Success",
          text: "Message Sent Successfully",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Message Failed to Send",
          icon: "error"
        });
      }
    }
  );
}

function checkinputs() {
  const items = document.querySelectorAll(".item");
  let isValid = true; // Flag to indicate if all inputs are valid

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
      isValid = false;
    } else {
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    }

    if (items[1].value != "") {
      checkemail();
    }

    items[1].addEventListener("keyup", () => {
      checkemail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
        isValid = false;
      }
    });
  }

  return isValid;
}

function checkemail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const email = document.getElementById("email");
  const errortxtemail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
    if (email.value != "") {
      errortxtemail.innerText = "Enter a valid email address";
    } else {
      errortxtemail.innerText = "Email address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
    errortxtemail.innerText = ""; // Clear any previous error text
  }
}
