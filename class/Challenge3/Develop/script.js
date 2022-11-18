var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword(){

  while (true) {

    var passwordInput = window.prompt("Insert a number of characters for your password")
  
    if (passwordInput === null){
      return
    }
  
    var passwordLength = parseInt(passwordInput)
    
    if (isNaN(passwordLength)) {
      window.alert("Please only insert numbers")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password must be between 8 and 128 characters")
    } else {
      break
    }

  }

    var numberInput = window.confirm("Would you like to include numbers in your password");
    var symbolsInput = window.confirm("Would you like to include symbols in your password");
    var lowerCaseInput = window.confirm("Would you like to include lower case letters in your password");
    var upperCaseInput = window.confirm("Would you like to include upper case letters in your password");
  
      var numberList = ["1","2","3","4","5","6","7","8","9","0"]
      var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      var symbolsList = ["!","@","#","$","%","^","&","*","(",")"]

    var passwordOptions = []
    
    if (numberInput === true) {
        passwordOptions.push(numberList)
      }

    if (symbolsInput === true) {
        passwordOptions.push(symbolsList)
      }

    if (lowerCaseInput === true) {
        passwordOptions.push(lowerCaseList)
      }

    if (upperCaseInput === true) {
        passwordOptions.push(upperCaseList)
      }

    if (passwordOptions.length === 0) {
        passwordOptions.push(lowerCaseList)
      }

      
    var generatePassword = ""

    for (var i = 0; i < passwordLength; i++){
      var randomList = getRandomItem(passwordOptions)
      var randomChar = getRandomItem(randomList)
     generatePassword += randomChar
  }

  return generatePassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
