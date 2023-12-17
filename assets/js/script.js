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

// * Generate a password when the button is clicked
//   * Present a series of prompts for password criteria
//     * Length of password
//       * At least 8 characters but no more than 128.
//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)
//   * Code should validate for each input and at least one character type should be selected
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

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

// The Password
const strPassword = "";

// Function to prompt user for password options
function getPasswordOptions() {

    // Prompt and save password options:
    
    // Choose number between 8 and 128 characters and save to global variable
    let askLength = prompt("How long do you want your password to be? \nEnter a number from 8 to 128.");
    
    // Did we get a value
    if (askLength === null) {
      // Cancel button
      return;
    } else {
      // Is it valid
      if ((askLength === NaN) || (askLength < 8) || (askLength > 128)) {
        alert("Please enter a number from 8 to 128.");
        return;
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
      passOpts.passCharset.useUpper= true;
    } else {
      passOpts.passCharset.useUpper = false;
    }

    console.log(`Use Uppercase: ${passOpts.passCharset.useUpper}`);

    // Include numeric            Y/N
    let askNumeric = confirm("Would you like to include numeric characters? \nSelect OK for Yes or Cancel for No.");

    if (askUppercase) {
      passOpts.passCharset.useNumeric= true;
    } else {
      passOpts.passCharset.useNumeric = false;
    }

    console.log(`Use Numeric: ${passOpts.passCharset.useNumeric}`);

    // Include Special characters Y/N
      // Check at least one character set has been selected    
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  
  // Not sure we need this function

}

// Function to generate password with user input
function generatePassword() {

    // Get password options
    getPasswordOptions();
    // For every password character, 
      // pick a random number from the available charactersets and add to a password array
    // Save array to password as a string
    // Return generated password
  return "";
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