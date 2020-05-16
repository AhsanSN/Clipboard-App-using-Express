function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var cemail = document.getElementById("cemail").value;
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2")
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;

    if(name.length < 3){
      text = "Invalid Username";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 5){
      text = "Invalid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(email!==cemail){
        text = "Emails Do Not Match";
        error_message.innerHTML =text;
        return false;
    }
    if(pass1.value.length < 6) {
      alert("Error: Password must contain at least six characters!");
      pass1.focus();
      return false;
    }
    if(pass1.value!==pass2.value){
      text = "Password don't match!";
      error_message.innerHTML = text;
      return false;
    }
    alert("Registration Complete!");

    return true;
  }

  function checkPass()
{
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
 	
    if(pass1.value.length > 5)
    {
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Looks Good!"
    }
    else
    {
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Password has to be at least 6 characters!"
        return false;
    }
  
    if(pass1.value == pass2.value)
    {
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
    }
	else
    {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Looks Good!"
    }
}  