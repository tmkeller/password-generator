// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "\"\\~`!@#$%^&*()_-{}[]|/<>.,:;+='";
  var charList = "";

  if ( confirm( "Include lowercase characters?" ) ) {
    charList += lowercaseCharacters;
  }
  if ( confirm( "Include uppercase characters?" ) ) {
    charList += uppercaseCharacters;
  }
  if ( confirm( "Include numeric characters?" ) ) {
    charList += numericCharacters;
  }
  if ( confirm( "Include special characters?" ) ) {
    charList += specialCharacters;
  }
  
  if ( !charList ) {
    alert( "You need to select at least one character type. Please try again.");
  } else {
    return charList;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
