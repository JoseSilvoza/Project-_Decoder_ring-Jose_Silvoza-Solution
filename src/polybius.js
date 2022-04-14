// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //encoding alphabet
  const encodes = {
   " ": " ", "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
   "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", "q": "14",
    "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25",
    "x": "35", "y": "45", "z": "55"
  };
  
  // decoding alphabet with (i/j) = 42
  const decodes = {
    " ": " ", "11": "a", "21": "b", "31": "c", "41": "d", "51": "e",
   "12": "f", "22": "g", "32": "h", "42": "(i/j)", "52": "k",
    "13": "l", "23": "m", "33": "n", "43": "o", "53": "p", "14": "q",
    "24": "r", "34": "s", "44": "t", "54": "u", "15": "v", "25": "w",
    "35": "x", "45": "y", "55": "z"
  }
  // need to pull each index to match the letter to encode the message
  // need to return the index to the matching letter?
  // 2 helper functions to encode/decode
  function encodingFunction(input) {
    let message = input.toLowerCase().split("");
    let output = '';

    for (let letters of message) {
      if (letters in encodes) {
        output += encodes[letters];
      }
    }
    return output;
  }

  function decodingFunction(input) {
    let output = '';
    
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === ' ') {
        output += ' ';
        i--;
      } else {
        current = input[i] + input[i + 1];
        output += decodes[current]
      }
    }
    return output;
  }
  
  // call helper functions to finish code
  function polybius(input, encode = true) {
    if (encode === false) {
      if (input.split(" ").join("").length % 2 == 1) {
        return false;
      }
      return decodingFunction(input)
    }
    return encodingFunction(input)
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
