// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = 0;
var hasLowerCase;
var hasUpperCase;
var hasSpecialChar;
var hasNumbers;

generateBtn.addEventListener("click", function () {
  promptLength();
});

function promptLength() {
  var stringLength = prompt("Please input your desired password length. Must between 8-128 characters.");
  length = Number(stringLength);
  console.log(length);

  if (length >= 8 && length <= 128) {
    var lowerCase = prompt("Include lowercase letters? \n Please type 'yes' or 'no' below.");
    promptLowerCase(lowerCase);
  } else if (length < 8 || length > 128) {
    alert("Please enter a valid value of at least 8 and at most 128.");
    promptLength();
  } else if (isNaN(String.fromCharCode(event.keyCode))) {
    //⇧ QUESTION: WHAT is going on here? from https://stackoverflow.com/questions/10713749/javascript-validation-numbers-only　⇧
    alert("Please enter a numeric value. \n Example: 12");
    promptLength();
  };
}

function promptLowerCase(var1) {
  if (var1 === "yes" || var1 === "Yes" || var1 ===  "YES" || var1 === "y3s") {
    hasLowerCase = true;
    promptUpperCase();
  } else if (var1 === "no" || var1 === "No" || var1 === "NO") {
    hasLowerCase = false;
    console.log(hasLowerCase);
    promptUpperCase();
  } else
    alert("Please respond by typing either 'yes' or 'no'.");
}

function promptUpperCase() {
  var upperCase = prompt("Include Uppercase letters? \n Please type 'yes' or 'no' below.");
  if (upperCase === "yes" || upperCase === "Yes" || upperCase === "YES" || upperCase === "y3s"){
    hasUpperCase = true;
    promptNumber();
  } else if (upperCase === "no" || upperCase === "No" || upperCase === "NO") {
    hasUpperCase = false;
    promptNumber();
  } else
    alert("Please respond by typing either 'yes' or 'no'.");
}

function promptNumber() {
  var number = prompt("Include a numeric value? \n Please type 'yes' or 'no' below.");
  if (number === "yes" || number === "Yes" || number ===  "YES" || number === "y3s"){
    hasNumbers = true;
    promptSpecialCharacter();
  } else if (number === "no" || number === "No" || number === "NO") {
    hasNumbers = false;
    promptSpecialCharacter();
  } else
    alert("Please respond by typing either 'yes' or 'no'.");
}

function promptSpecialCharacter() {
  var specialCharacter = prompt("include (a) special character(s)? \n Please type 'yes' or 'no' below.");
  if (specialCharacter === "yes" || specialCharacter === "Yes" || specialCharacter ===  "YES" || specialCharacter === "y3s"){
    hasSpecialChar = true;
    writePassword();
  } else if (specialCharacter === "no" || specialCharacter === "No" || specialCharacter === "NO") {
    hasSpecialChar= false;
    writePassword();
  } else
    alert("Please respond by typing either 'yes' or 'no'.");
}

// MATH AREA

function getRandomLowercase() {
  // creates an array of lowercase letters
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  // returns from the array above a random item in the array. 
  return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];

};

function getRandomUppercase() {
  // creates an array of lowercase letters
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // returns from the array above a random item in the array. 
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
};

function getRandomNumber() {
  // Generates a random Number from 1-10
  return (Math.floor(Math.random() * 10));
};

function getRandomSpecialCharacter() {
  var specialCharacters = "~!@#$%^&*()_-+=|";
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
};



// if(length < 8 || length > 128 ){
//   console.log(length);
// } else {
//   var lengthEl = document.createElement(length);
// } 



// var Start = document.querySelector("#criteria");
// criteria.addEventListener("click", () => {
//   var element = document.querySelector(".password-criteria");
//   element.style.visibility = "visible";
// });

// function generatePassword(){

//   return "Password will go here.";
// }


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword){
//     console.log(writePassword);
// };


function writePassword() {
  var generatedPassword = ""
  var finishPassword = document.getElementById("password");
  console.log([length, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialChar]);

  for (var i = 0; i < length; i++) {
    if (hasLowerCase && generatedPassword.length < length) {
      generatedPassword = generatedPassword + getRandomLowercase();
    }
    if (hasUpperCase && generatedPassword.length < length) {
      generatedPassword = generatedPassword + getRandomUppercase();
    }
    if (hasNumbers && generatedPassword.length < length) {
      generatedPassword = generatedPassword + getRandomNumber();
    }
    if (hasSpecialChar && generatedPassword.length < length) {
      generatedPassword = generatedPassword + getRandomSpecialCharacter();
    }
    console.log(generatedPassword);
  }
finishPassword.value=generatedPassword;
  
}

// take a user input and push a value for every positive criteria into a global array
// have the array pull random characters for each confirmed type of character
// Display the final product into the placeholder text
