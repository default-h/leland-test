const emailAddress = document.getElementById('emailAddress');
const phoneNumber = document.getElementById('phoneNumber');
const form = document.getElementById('form');
const error = document.getElementById('error');

const EMAIL_REGEX =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const PHONE_REGEX =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInput();
});

function validateInput() {
  const emailValue = emailAddress.value.trim();
  const phoneValue = phoneNumber.value.trim();

  if (emailValue === '') {
    errorMessage(emailAddress, 'Email address is required');
  } else if (!validEmail(emailValue)) {
    errorMessage(emailAddress, 'Invalid email');
  } else {
    validated(emailAddress);
  }

  if (phoneValue === '') {
    errorMessage(phoneNumber, 'Phone number is required');
  } else if (!validPhone(phoneValue)) {
    errorMessage(phoneNumber, 'Invalid phone number');
  } else {
    validated(phoneNumber);
  }
}

function errorMessage(input, err) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'error';
  small.innerText = err;
}

function validated(input) {
  const formControl = input.parentElement;
  formControl.className = 'success';
}

function validEmail(emailAddress) {
  return EMAIL_REGEX.test(emailAddress);
}

function validPhone(phoneNumber) {
  return PHONE_REGEX.test(phoneNumber);
}
