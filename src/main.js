function showAlert() {
  alert("Alert from JS file");
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function showMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function EmailValidation(enteredEmail) {
  var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (enteredEmail.value.match(mail_format)) {
    alert("Yeah! a valid email!");
    document.emailform.field.focus();
    return true;
  } else {
    alert("Sorry! an invalid email!");
    document.emailform.field.focus();
    return false;
  }
}
