// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  promptLength();
  });

function promptLength(){
  var stringLength = prompt("Please input your desired password length. Must between 8-128 characters.");
  var length = Number(stringLength);
  if (length >= 8 || length <= 128){
    var lowerCase = prompt("Include lowercase letters? \n Please type 'yes' or 'no' below.");
    promptLowerCase();
  } else if (length < 8 || length > 128 ){
    alert("Please enter a valid value of at least 8 and at most 128.");
    promptLength(); 
  } else if (isNaN(String.fromCharCode(event.keyCode))){
    //⇧ QUESTION: WHAT is going on here? from https://stackoverflow.com/questions/10713749/javascript-validation-numbers-only　⇧
    alert("Please enter a numeric value. \n Example: 12");
    promptLength();    
  };
}

function promptLowerCase(){
  if (promptLength.lowerCase == "yes"){
    // ⇩ QUESTION"　Why doesn't this work？　⇩
   var hasLower = Boolean(promptLowerCase.lowerCase);
   promptUpperCase= prompt("Include Uppercase letters? \n Please type 'yes' or 'no' below.");
  } else if (promptLength.lowerCase == "no"){
    console.log("bacon");
  }
  //  else if (promptLength.lowerCase !== ){
  //   alert("Please respond by typing either 'yes' or 'no' below.");
  //   promptLowerCase(); 
  // }
}

function promptUpperCase(){
}

function promptNumber(){
}

function promptSpecialCharacter(){
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