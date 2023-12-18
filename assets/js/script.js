// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Password Options
const passOpts = {
  passLength: 8,
  passCharset: {
    useSpecial: true,
    useNumeric: true,
    useLower: true,
    useUpper: true
  }
};

// Min/Max password length settings
const minPassLength = 8;
const maxPassLength = 128;

// Function to prompt user for password options
function getPasswordOptions() {

  // Prompt and save password options:
  
  // Choose number between min and max characters and save to global variable
  let askLength = prompt(`How long do you want your password to be? \nEnter a number from ${minPassLength} to ${maxPassLength}.`);
  
  // Did we get a value
  if (askLength === null) {
    // Cancel button
    return false;
  } else {
    // Is it valid
    if ((isNaN(askLength)) || (askLength < minPassLength) || (askLength > maxPassLength)) {
      alert(`Please enter a number from ${minPassLength} to ${maxPassLength}.`);
      return false;
    } else {
      // Save length to global variable
      passOpts.passLength = parseInt(askLength);
    }
  }

  console.log(`Password length: ${passOpts.passLength}`);

  // Include lowercase          Y/N
  let askLowercase = confirm("Would you like to include lowercase characters? \nSelect OK for Yes or Cancel for No.");

  if (askLowercase) {
    passOpts.passCharset.useLower = true;
  } else {
    passOpts.passCharset.useLower = false;
  }

  console.log(`Use Lowercase: ${passOpts.passCharset.useLower}`);

  // Include uppercase          Y/N
  let askUppercase = confirm("Would you like to include uppercase characters? \nSelect OK for Yes or Cancel for No.");

  if (askUppercase) {
    passOpts.passCharset.useUpper = true;
  } else {
    passOpts.passCharset.useUpper = false;
  }

  console.log(`Use Uppercase: ${passOpts.passCharset.useUpper}`);

  // Include numeric            Y/N
  let askNumeric = confirm("Would you like to include numeric characters? \nSelect OK for Yes or Cancel for No.");

  if (askNumeric) {
    passOpts.passCharset.useNumeric = true;
  } else {
    passOpts.passCharset.useNumeric = false;
  }

  console.log(`Use Numeric: ${passOpts.passCharset.useNumeric}`);

  // Include Special characters Y/N
  let askSpecial = confirm("Would you like to include special characters (eg @, %, +)? \nSelect OK for Yes or Cancel for No.");

  if (askSpecial) {
    passOpts.passCharset.useSpecial = true;
  } else {
    passOpts.passCharset.useSpecial = false;
  }

  console.log(`Use Special: ${passOpts.passCharset.useSpecial}`);

  // Check at least one character set has been selected
  if (!askSpecial && !askLowercase && !askUppercase && !askNumeric) {
    if (confirm("You haven't selected any charactersets. \nWould you like to select your options again?")) {
      // Redo selection of password options
      getPasswordOptions();
    } else {
      return false;
    }
  }  
}

// Function for getting a random element from an array
function getRandom(arr) {

  // Get a random number
  const intRandom = Math.floor(Math.random() * arr.length);
  
  // Return randomly chosen element from the array
  return arr[intRandom];
}

// Function to generate password with user input
function generatePassword() {

  // Store of all available password characters
  const passwordCharPool = [];

  // Array of final password characters
  const passwordArray = [];

  // The password to return
  let passwordString = "";

  // Get password options
  if (false === getPasswordOptions()) {
    return "";
  };

  // Populate the Password Character Pool with chosen charactersets
  if (passOpts.passCharset.useSpecial) {
    passwordCharPool.push(...specialCharacters);
  }
  if (passOpts.passCharset.useNumeric) {
    passwordCharPool.push(...numericCharacters);
  }
  if (passOpts.passCharset.useLower) {
    passwordCharPool.push(...lowerCasedCharacters);
  }
  if (passOpts.passCharset.useUpper) {
    passwordCharPool.push(...upperCasedCharacters);
  }

  // The pool should never be zero here
  if (passwordCharPool.length === 0) {
    alert("There has been an error.");
    return "";
  }

  // For every password character, 
  for (let i = 0; i < passOpts.passLength; i++) {
    // pick a random number from the available charactersets and add to a password array
    passwordArray[i] = getRandom(passwordCharPool);
  }

  // Save array to password as a string
  passwordString = passwordArray.join('');
  
  // Return generated password
  return passwordString;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);