const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "error"; 
    email.className = "valid";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "errorActive";
  email.className = "invalid";
}


// create a funciton that ensures password and confirm password match and display a custom error message if they don't match

const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");
const passwordError = document.querySelector(".passError");

confirmPassword.addEventListener("input", (event) => {
  if (password.value === confirmPassword.value) {
    passwordError.textContent = "";
    passwordError.className = "passError";
    confirmPassword.className = "valid";
  } else {
    showPassError();
  }
});


function showPassError() {
  if (password.value !== confirmPassword.value) {
    passwordError.textContent = " Passwords do not match";
  }

  passwordError.className = "passErrorActive";
  confirmPassword.className = "invalid";

}



