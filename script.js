var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '[', ']', '{', '}', '|', ',', '<', '>', '.', '/', '?'];
var passwordLength;

function chooseLength() {
  passwordLength = prompt('Enter desired password length between 8 and 128 characters')
  if (passwordLength === '') {
    alert('Please enter desired password length')
    chooseLength()
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert('Password must be between 8 and 128 characters')
    chooseLength()
  } else {
    alert('Please continue for character preferences')
  }
}

function createPassword() {
  var defaultCharacters = []
  var password = ''

  chooseLength()
  var allowLowercase = confirm('Would you like to allow lowercase letters in your password?')
  var allowUppercase = confirm('Would you like to allow uppercase letters in your password?')
  var allowSpecial = confirm('Would you like to allow special characters in your password?')
  var allowNumbers = confirm('Would you like to allow numbers in your password?')

  if (allowSpecial) {
    defaultCharacters = defaultCharacters.concat(special)
  }
  if (allowLowercase) {
    defaultCharacters = defaultCharacters.concat(lowercase)
  }
  if (allowUppercase) {
    defaultCharacters = defaultCharacters.concat(uppercase)
  }
  if (allowNumbers) {
    defaultCharacters = defaultCharacters.concat(numbers)
  }
  for (var i = 0; i < passwordLength; i++) {
    password += defaultCharacters[Math.floor(Math.random() * defaultCharacters.length)]
  }
  return password
}

function displayPassword() {
  var passwordValue = document.querySelector('#password')
  passwordValue.textContent = createPassword()
}

generateBtn.addEventListener('click', displayPassword)