// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const theAlpha = "abcdefghijklmnopqrstuvwxyz".split(""); 
  const output = [];
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // checks for the alphabet requirements
    if (!alphabet || alphabet.length !== 26) return false;

    // loop through alphabet to check for repeating characters
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (i !== j && alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    
    const inputAlphabet = alphabet.split("");

    if (encode) {
      //encode logic
      for (let i = 0; i < 25; i++) {
        output[theAlpha[i]] = inputAlphabet[i]
      };
    } else {
      //decode logic
      for (let i = 0; i < 25; i++) {
        output[inputAlphabet[i]] = theAlpha[i]
      };
    };

    // checks for spaces and returns output as a string
    const result = input.toLowerCase().split("").map((space) => {
      if (space === " ") return " ";
      return output[space];
    })
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
