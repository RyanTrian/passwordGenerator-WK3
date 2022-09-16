// Assignment Code

const lower = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"];
const upper = ["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = ["'","!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","\"",":",";","?",">","<",",",".","/","-","="];


function generatePassword() {

  // Ask for the password's desired length
  let pwLength = prompt("Please indicate desired password length between 8-128 characters");
  // If user click Cancel, run fx generatePassword again
  // if (pwLength === null) {
  //   generatePassword();
  // }

  // If the pwLength is out of range, run generatePassword again
  if (pwLength < 8 || pwLength > 128) {
    alert("Please enter a value in 8-128");
    return generatePassword();
  }

  // Ask for what characters to include
  function userConfirms() {
    let letter = confirm("Will lowercase letter be included?");
    // console.log(letter);
    let upperCase = confirm("Will upppercase letter be included?");
    // console.log(upperCase);
    let number = confirm("Will number be included?");
    // console.log(number);
    let specialChar = confirm("Will special characters be included?");
    // console.log(specialChar);
    if (!(letter || upperCase || number || specialChar)) {
      alert("Must confirm at least one")
      return userConfirms();
    }
    return [letter, upperCase, number, specialChar]
  }
  // Store each Boolean elements inside new variables
  let userBoolean = userConfirms();
  console.log(userBoolean);
  userLetter = userBoolean[0];
  userUpper = userBoolean [1];
  userNumber = userBoolean [2];
  userSpecial = userBoolean [3];

  // Create an array that nested the array constants if Boolean value is true
  var userChoice = new Array();
  var n = 0;
  if (userLetter) {
    userChoice[n] = lower;
    n++;
  }
  if (userUpper) {
    userChoice[n] = upper;
    n++;
  }
  if (userNumber) {
    userChoice[n] = number;
    n++
  }
  if (userSpecial) {
    userChoice[n] = specialChar;
  }
  // console.log(userChoice);

  // Generate Password
  let generatedPassword = "";
  for (let i = 0; i < pwLength; i++) {
    let randomIndex = Math.floor(Math.random() * (n+1));
    let randomIndex2 = Math.floor(Math.random() * userChoice[randomIndex].length);
    let randomChar = userChoice[randomIndex][randomIndex2];
    generatedPassword = generatedPassword.concat(randomChar);
    // console.log(generatedPassword);
  }
  return generatedPassword;
}

//Reference to Generate Button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

