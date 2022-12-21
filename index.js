const uname = document.getElementById('uname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
//const form = document.getElementById('form');

const valUserName = /[a-z]\.[a-z]{3,}/;
const valEmail = /[a-zA-Z0-9]{1,}@bigcorp.eu/;
const valPhone = /[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}|[0-9]{3}.[0-9]{3}.[0-9]{4}|[0-9]{3}\s[0-9]{3}\s[0-9]{4}/;

email.addEventListener('input', (event) => {
    if (valEmail.test(event.target.value)) {
        email.classList.remove('is-invalid');
    } else {
        email.classList.add('is-invalid');
    }
    });

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
