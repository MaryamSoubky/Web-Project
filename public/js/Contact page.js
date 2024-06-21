const form = document.querySelector("form");
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const mess = document.getElementById("message");

  function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.
      value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    
    Email.send({
      SecureToken:"f07bd2e4-a549-4902-a585-c7b119ad5fbf",
      To: 'booklyy.store@gmail.com',
      From: "booklyy.store@gmail.com",
      Subject: subject.value,
      Body: bodyMessage
    }).then(
      message =>{
        if(message="OK") {
        Swal.fire({
          title:"Success",
          text:"Message Sent Successfuly",
          icon:"Success"
        });
      }
    }
  );
  }
  function checkinputs(){
    const items=document.querySelectorAll(".item");

    for(const item of items){
      if(item.value==""){ 
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
      if(items[1].value!=""){
checkemail();
      }
      items[1].addEventListener("keyup",()=>{
        checkemail();
      });
      item.addEventListener("keyup",()=>{
        if(item.value != ""){
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
    }
    else{
      item.classList.add("error");
      item.parentElement.classList.add("error");
  }
});
    }
  }
  function checkemail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errortxtemail =document.querySelector(".error-txt.email");
    if(!email.value.match(emailRegex)){
email.classList.add("error");
email.parentElement.classList.add("error");
    if(email.value!= ""){
      errortxtemail.innerText="enter a valid address";
    }
    else{
      errortxtemail.innerText="emaill address can't be blank";
    }
  }
    else{
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkinputs();

    if(!fullName.classList.contains("error")&&!email.classList.contains
    ("error")&&!phone.classList.contains("error")&&!subject.classList
      .contains("error")&&!mess.classList.contains("error")){
        sendEmail();
        
        form.reset();
        return false;
      }
  });
