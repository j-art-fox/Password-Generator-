// Assignment Code

const generateBtn = document.querySelector("#generate");
  generate.addEventListener("click", () => {
    const element = document.querySelector(".password-criteria");
      element.style.visibility ="visible";
    const length = +lengthEl.value;
    const withLowercase = lowercaseEl.value; 
    const withUppercase = uppercaseEl.value;
    const withNumber = +numbersEl.value;
    const withSpecialCharacter = specialCharactersEl.value; 
});


const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const specialCharactersEl = document.getElementById("special-characters");

const randomFunc= {
  lower: getRandomLowercase,
  upper: getRandomUppercase,
  number: getRandomNumber,
  special: getRandomSpecialCharacter
};



// Charcode Reference https://net-comber.com/charset.html

  function getRandomLowercase (){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97 );
  };

  function getRandomUppercase (){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 65 );
  };

  function getRandomNumber (){
    return (Math.floor(Math.random() * 10));
  };

  function getRandomSpecialCharacter (){
    const specialCharacters = "~!@#$%^&*()_-+=|";
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  };
  




// Hides the criteria
var hideBtn = document.querySelector("#hide");
hide.addEventListener("click", () => {
  const element = document.querySelector(".password-criteria");
  element.style.visibility ="hidden";

});


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
