const uname = document.getElementById('uname');
const phone = document.getElementById('phone');
//const form = document.getElementById('form');

const valUserName = /[a-z]\.[a-z]{3,}/;
const valEmail = /[a-zA-Z0-9]{1,}@[a-zA-Z0-9]{3,}.com/;
const valPhone = /[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}|[0-9]{3}.[0-9]{3}.[0-9]{4}|[0-9]{3}\s[0-9]{3}\s[0-9]{4}/;

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}


uname.addEventListener('input', (event) => {
    if (valUserName.test(event.target.value)) {
        uname.classList.remove('is-invalid');
    } else {
        uname.classList.add('is-invalid');
    }
    }
);

phone.addEventListener('input', (event) => {
    if (valPhone.test(event.target.value)) {
        phone.classList.remove('is-invalid');
    } else {
        phone.classList.add('is-invalid');
    }
    }   
);

/* form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (valUserName.test(uname.value) && valEmail.test(email.value) && valPhone.test(phone.value)) {
        console.log('success');
    } else {
        console.log('failure');
    }
}
);
 */
