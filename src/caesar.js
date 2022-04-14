// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // need to instill an alphabet array to accept the numbers 97-122
  // .map through the array of letters to output the numbers & vise versa
  function getUnicode(alphabet) {
    return alphabet.map((letter) => {
      const unicode = letter.toLowerCase().charCodeAt();
      return unicode >= 97 && unicode <= 122 ? unicode : letter;
    });
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    if (encode === false) {
      shift = shift * -1;
    }

    // split the input into individual letters to get the value;
    // use the given value to determine where the shift should begin;
    const inputMessage = input.split("");
    const givenValue = getUnicode(inputMessage);

    // need to shift letters with given value
    // .map to see where the inital value beings
    const shiftStart = givenValue.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    // need to allow shift from z - a & a - z
    // .map again to see what number needs to be added/subtracted
    const newAlphabet = shiftStart.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });

    // .map again the newAlphabet to display to number then convert / vise versa
    // return the value as a string for the final output
    const finalOutput = newAlphabet.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });

    return finalOutput.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
