function validateForm(event) {
    event.preventDefault();
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;

    if (name == "") {
        alert("Please enter your name");
        return false
      }
    
      if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("Only alphabets are allowed in name");
        return false;
      }
      
  if (email == "") {
    alert("Please enter your email")
    return false
  }

  var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!(emailRegex.test(email))) {
    alert("Email Address is invalid")
    return false;
  }

  alert("Message sent successfully")
  window.location.href = "https://uns-exual.github.io/Sprint07/";
}
