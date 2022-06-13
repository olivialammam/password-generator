// Assignment code here
var criteria = {
  promptConfirm: false,
  characterLimit: 8,
  upperCase: true,
  lowerCase: true,
  numbers: true,
  specialCharacters: true,
};


var characters = {
  letter: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!#$%&()*+,-./:;<=>?@^_`{|}~",
};


var randomNum = function (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


var randomCharacter = function (charactersProperty) {
  randomPickedCharacter = charactersProperty.charAt(randomNum(0,charactersProperty.length));
  return randomPickedCharacter;
};

var setCharacterLimit = function () {
  criteria.characterLimit = window.prompt("What's your desired character limit?\n[Length must be at least 8 characters but no more than 128 characters]");
  criteria.characterLimit = Number(criteria.characterLimit);
  if (typeof criteria.characterLimit === typeof 0 && criteria.characterLimit >= 8 && criteria.characterLimit <= 128) {
    typeof criteria.characterLimit
    setCharacterLimit();
  }
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
