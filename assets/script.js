// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  var promptName = prompt("Please input your desired password length. Must between 8-128 characters.")
  });

  if(promptName < 8 && promptName > 128 ){
    alert("Please enter a value of at least 8 and at most 128.");
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