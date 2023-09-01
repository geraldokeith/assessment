const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const gender = document.getElementById('gender')
const email = document.getElementById('email')
const form = document.getElementById('form')
// Functions
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${input.id} is required.`)
    } else {
      showSuccess(input)
    }
  })
}
function validateEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is invalid')
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be atleast ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be less than ${max} characters`)
  } else {
    showSuccess(input)
  }
}
function checkPasswordsMatch(input, input2) {
  if (input.value !== input2.value) {
    showError(input2, 'Passwords do not match')
  }
}
// Event Listener

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkRequired([firstname, lastname,  gender, email,])
  validateEmail(email)
  checkLength(firstname, 2, 255)
  checkLength(lastname, 2, 255)
  checkLength(gender, 4, 6)
  
})

