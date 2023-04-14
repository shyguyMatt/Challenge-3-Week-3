// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChar = ['!','@','#','$','%','&','*','?'];
var numeric = ['1','2','3','4','5','6','7','8','9','0'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Write password to the #password input
function writePassword() {
  var password = '';
  function generatePassword() {
    do {
    var length = window.prompt("How many characters do you want the password to be?");      
    } while(!validateLength(length));

    if(length === null) return;

    function validateLength(length) {
      if(length >= 8 && length <= 128) return true;
      else if(length === null) return true;
      else {
        window.alert("That is not a valid number!\nPlease enter a number between 8 and 128.");
        return false;
      }
    }

    do{
      var upper = window.confirm("Would you like to include uppercase letters in your password?");
      var lower = window.confirm("Would you like to include lowercase letters in you password?");
      var special = window.confirm("Would you like to include special characters in your password?");
      var num = window.confirm("would you like to include numbers in your password");      
    } while(!validateChoice(upper, lower, special, num))

    function validateChoice(upper, lower, special, num) {
      if(upper == false && lower == false && special == false && num == false) {
        window.alert("You must select at least 1 of the 4 choices!");
        return false;
      }
      else return true;
    }


    for (var i = 0; i<length; i++) {
      randInt = getRandomInt(0,4);
      if(randInt == 0 && upper) {
        //generate random uppercase
        password = password + upperCase[getRandomInt(0, upperCase.length)];

      } else if(randInt == 1 && lower) {
        //generate random lowercase
        password = password + lowerCase[getRandomInt(0, lowerCase.length)];

      } else if(randInt == 2 && special) {
        //generate random special character
        password = password + specialChar[getRandomInt(0, specialChar.length)];

      } else if(randInt == 3 && num) {
        //generate random number
        password = password + numeric[getRandomInt(0, numeric.length)];

      } else {
        i--;
      }
    }
    return password;
  }

  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
