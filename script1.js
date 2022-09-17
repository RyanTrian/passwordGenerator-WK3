// Assignment Code
const lower = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"];
const upper = ["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = ["'","!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","\"",":",";","?",">","<",",",".","/","-","="];
// Global array to store values that is inside Function GeneratePassword then reuse again in the click event for an extra feature
var varArray = [];

function generatePassword() {
  // Ask for the password's desired length
  let pwLength = prompt(
    "Please indicate desired password length between 8-128 characters"
  );
  // If user click Cancel, terminate.
  if (pwLength === null) {
    return;
  }
  // If the pwLength is out of range, run generatePassword again
  else if (pwLength < 8 || pwLength > 128) {
    alert("Please enter a value in 8-128");
    return generatePassword();
  }

  // Ask for what characters to include
  function userConfirms() {
    let letter = confirm("Will lowercase letter be included?");
    let upperCase = confirm("Will upppercase letter be included?");
    let number = confirm("Will number be included?");
    let specialChar = confirm("Will special characters be included?");
    // console.log(specialChar);
    if (!(letter || upperCase || number || specialChar)) {
      alert("Must confirm at least one");
      return userConfirms();
    }
    return [letter, upperCase, number, specialChar];
  }
  // Store each Boolean elements inside new variables
  let userBoolean = userConfirms();
  userLetter = userBoolean[0];
  userUpper = userBoolean[1];
  userNumber = userBoolean[2];
  userSpecial = userBoolean[3];
  
  // Create an array that nested the array constants if Boolean value is true
  var userChoice = new Array();
  var n = 0;
  if (userLetter) {
    userChoice[n] = lower;
    if (userUpper || userNumber || userSpecial) {
      n++;
    }
  }
  if (userUpper) {
    userChoice[n] = upper;
    if (userNumber || userSpecial) {
      n++;
    }
  }
  if (userNumber) {
    userChoice[n] = number;
    if (userSpecial) {
      n++;
    }
  }
  if (userSpecial) {
    userChoice[n] = specialChar;
  }

  // Generate Password
  let generatedPassword = "";
  for (let i = 0; i < pwLength; i++) {
    let randomIndex = Math.floor(Math.random() * (n + 1));
    let randomIndex2 = Math.floor(Math.random() * userChoice[randomIndex].length);
    let randomChar = userChoice[randomIndex][randomIndex2];
    generatedPassword = generatedPassword.concat(randomChar);
  }
  var array = [generatedPassword, userChoice, n, pwLength];
  return array;
} //The end of generatePassword function
//Reference to Generate Button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordText = document.querySelector("#password");
function writePassword() {
  if (passwordText.value === "") {
    varArray = generatePassword();
  }
  let password = varArray[0];

  passwordText.value = password;
}

// Add event listener to generate button *Extra: generate another pw with the same rules
generateBtn.addEventListener("click", function () {
  if (passwordText.value !== "") {
    let wantPw = confirm("Do you want to generate another one?");
    if (wantPw === true) {
      let userChoice = varArray[1];
      let n = varArray[2];
      let pwLength = varArray[3];
      let generatedPassword = "";
      for (let i = 0; i < pwLength; i++) {
        let randomIndex = Math.floor(Math.random() * (n + 1));
        let randomIndex2 = Math.floor(Math.random() * userChoice[randomIndex].length);
        let randomChar = userChoice[randomIndex][randomIndex2];
        generatedPassword = generatedPassword.concat(randomChar);
      }
      varArray[0] = generatedPassword;
      writePassword();
    }
  } 
  else {
    writePassword();
  }
});

