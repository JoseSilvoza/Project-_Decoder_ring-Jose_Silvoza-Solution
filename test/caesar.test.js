// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");


describe("caesar()", () => {
  describe("error handeling", () => {
    it("it should return false if the shift amount is 0", () => {
      const message = "cat in the hat";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift amount is above 25", () => {
      const message = "the chicken crossed the road";
      const shift = 30;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift amount is less than -25", () => {
      const message = "to get to the otherside";
      const shift = -30;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "thinkful";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "wklqnixo";

      expect(actual).to.equal(expected);
    });
    it("should leave spaces and other symbols as is", () => {
      const message = "a space";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d vsdfh";

      expect(actual).to.equal(expected);
    });
    it("should ignore capitalized letters", () => {
      const message = "SPACE"
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "xufhj";

      expect(actual).to.equal(expected);
    })
  });
  
  describe("decoding a message", () => {
    it("should decode a message by shifting letters in the opposite direction", () => {
      const message = "sghmjetk";
      const shift = -1
      const actual = caesar(message, shift, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
      const message = "afcsb";
      const shift = 1;
      const actual = caesar(message, shift, false);
      const expected = "zebra";

      expect(actual).to.equal(expected);
    });
    it("should ignore capitalized letters", () => {
      const message = "xufhj";
      const shift = 5;
      const actual = caesar(message, shift, false);
      const expected = "space"

      expect(actual).to.equal(expected);
    });
  });
});
