// Assignment Code

// Declares what each "El" element is based on its ID in the index.html file
var passwordEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var lowercaseEl = document.getElementById("lowercase");
var uppercaseEl = document.getElementById("uppercase");
var numbersEl = document.getElementById("numbers");
var specialCharactersEl = document.getElementById("special-characters");

// This is an object with the properties that are defined by the math functions down below. 
var retrieveRandomCharacters = {
  lower: getRandomLowercase,
  upper: getRandomUppercase,
  number: getRandomNumber,
  special: getRandomSpecialCharacter
};



var generateBtn = document.querySelector("#generate");
generate.addEventListener("click", () => {
  var length = +lengthEl.value;
  var withLowercase = lowercaseEl.checked;
  var withUppercase = uppercaseEl.checked;
  var withNumber = numbersEl.checked;
  var withSpecialCharacter = specialCharactersEl.checked;

  // Pulls the values from the different functions
  passwordEl.innerText = generatePassword(
    length,
    withLowercase,
    withUppercase,
    withNumber,
    withSpecialCharacter
  );

  // Write password to the #password input
  function generatePassword(length, lower, upper, number, special) {
    var generatedPassword = "";
    var characterTypes = lower + upper + number + special;
    var passwordFormat = [{}];
    if (characterTypes === 0){
      return "Dude(tte), you gotta pick some criteria (wo)man.";
    }
    if (length = 8){
      return "Hey man, 8 isn't bad. ";

    }
    
     
    for (var i = 0; i < length; i+=characterTypes) {
       console.log(i);
    }

  };
});

// Displays the criteria
var displayBtn = document.querySelector("#criteria");
criteria.addEventListener("click", () => {
  var element = document.querySelector(".password-criteria");
  element.style.visibility = "visible";
});

// Hides the criteria
var hideBtn = document.querySelector("#hide");
hide.addEventListener("click", () => {
  var element = document.querySelector(".password-criteria");
  element.style.visibility = "hidden";

});

// MATH LAND
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
