// Assignment Code for generate and toggle_mode buttons
var generateBtn = document.querySelector("#generate");
var toggleBtn = document.querySelector("#toggle_mode");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if ( password ) {
    passwordText.value = password;
  }
}

// This function is responsible for validating user input, compiling the character strings, creating a randomized character string, and returning it to the passwordText binding inside the writePassword function.
function generatePassword() {
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  // Special characters with special meanings (backslash and quote marks) must be escaped.
  var specialCharacters = "\"\\~`!@#$%^&*()_-{}[]|/<>.,:;+='";

  /* var charNumber = prompt( "How long should your generated password be? (enter a number between 8 and 128)" ); */

  var charNumber = document.getElementById("character_number").value;
  var includeLowerCase = document.getElementById("lowercase_characters").checked;
  var includeUpperCase = document.getElementById("uppercase_characters").checked;
  var includeNumeric = document.getElementById("numeric_characters").checked;
  var includeSpecial = document.getElementById("special_characters").checked;

  if ( charNumber >= 8 && charNumber <= 128 ) {
    // charList variable will hold the list of characters we can choose from for a random password.
    var charList = "";

    if ( includeLowerCase ) {
      charList += lowercaseCharacters;
    }
    if ( includeUpperCase ) {
      charList += uppercaseCharacters;
    }
    if ( includeNumeric ) {
      charList += numericCharacters;
    }
    if ( includeSpecial ) {
      charList += specialCharacters;
    }

    if ( !charList ) {
      alert( "You need to select at least one character type. Please try again.");
    } else {
      // Generate an empty binding to hold the text of the generated password, then run the random character generation engine.
      var passText = "";
      for ( var i = 0; i < charNumber; i++ ) {
        var charRand = charList[ Math.floor( Math.random() * (charList.length) ) ];
        passText += charRand;
      }

      return passText;
    }

  } else { // Triggers if user does not enter a number between 8 and 128 (inclusive)
    alert( "You have not entered a valid number of characters. Please try again." );
  }
}

// This function enables dark mode by adding CSS classes to page elements.
function toggleDarkMode() {
  toggleBtn.addEventListener("click", toggleLightMode);
}

// This function enables light mode again by removing CSS classes from page elements.
function toggleLightMode() {
  toggleBtn.addEventListener("click", toggleDarkMode);
}

// Add event listener to generate and toggle_mode buttons
generateBtn.addEventListener("click", writePassword);
toggleBtn.addEventListener("click", toggleDarkMode);