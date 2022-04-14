// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("error handling", () => {
    it("should return false if the alphabet is not inserted", () => {
      const message = "hello";
      const actual = substitution(message);

      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "world";
      const alphabet = "notenough";
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
    it("should return false if there are repeating characters", () => {
      const message = "helloworld";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message using the inputted alphabet", () => {
      const message = "water";
      const alphabet = "zaqxswcdevfrbgtnhymjukilop";
      const actual = substitution(message, alphabet);
      const expected = "izjsy";

      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      const message = "hello world";
      const alphabet = "zaqxswcdevfrbgtnhymjukilop";
      const actual = substitution(message, alphabet);
      const expected = "dsrrt ityrx";

      expect(actual).to.equal(expected);
    });
    it("should work with any type of unique characters in the given alphabet", () => {
      const message = "water";
      const alphabet = "$aqxswcdevfrbgtnhymjukilop";
      const actual = substitution(message, alphabet);
      const expected = "i$jsy";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message with given alphabet", () => {
      const message = "tyzgcs";
      const alphabet = "zaqxswcdevfrbgtnhymjukilop";
      const actual = substitution(message, alphabet, false);
      const expected = "orange";

      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      const message = "bo tyzgcs";
      const alphabet = "zaqxswcdevfrbgtnhymjukilop";
      const actual = substitution(message, alphabet, false);
      const expected = "my orange";

      expect(actual).to.equal(expected);
    });
    it("should work with any tpye of unique characters in the given alphabet", () => {
      const message = "bo i$jsy";
      const alphabet = "$aqxswcdevfrbgtnhymjukilop";
      const actual = substitution(message, alphabet, false);
      const expected = "my water";

      expect(actual).to.equal(expected);
    });
  });
});
