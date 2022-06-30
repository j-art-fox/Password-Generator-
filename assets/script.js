// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  var length = prompt("Please input your desired password length. Must between 8-128 characters.")
  });

  if(length < 8 || length > 128 ){
    console.log("bacon");
  //   alert("Please enter a valid value of at least 8 and at most 128.");
  // } else {
  //   var lengthEl = document.createElement(length);
    
  } else {
    console.log("pizza");
  }


var Start = document.querySelector("#criteria");
criteria.addEventListener("click", () => {
  var element = document.querySelector(".password-criteria");
  element.style.visibility = "visible";
});

function generatePassword(){
 
  return "Password will go here.";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword){
//     console.log(writePassword);
// };