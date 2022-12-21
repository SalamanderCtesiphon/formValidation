const uname = document.getElementById('uname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('form');

const valUserName = /[a-z]\.[a-z]{3,}/;
const valEmail = /[a-zA-Z0-9]{1,}\@[bigcorp.eu]/;
const valPhone = /[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}|[0-9]{3}\.[0-9]{3}\s[0-9]{4}|[0-9]{3}\s[0-9]{3}\s[0-9]{4}/;

email.addEventListener('input', (event) => {