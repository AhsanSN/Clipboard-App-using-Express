function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;

    if(name.length < 1){
      text = "Invalid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 5){
      text = "Subject Must Be More Than 5 Characters";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Invalid Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 5){
      text = "Invalid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 20){
      text = "Message Must Be Over 20 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Message Sent!");

    return true;
  }