// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
    describe("encoding a message", () => {
        it("should encode a message by transforming each letter into a number", () => {
            const message = "water"
            const actual = polybius(message);
            const expected = "2511445124";

            expect(actual).to.equal(expected);
        });
        it("should transform both 'i' and 'j' to 42", () => {
            const message = "jinx"
            const actual = polybius(message);
            const expected = "42423335";

            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const message = "bug zapper";
            const actual = polybius(message);
            const expected = "215422 551153535124";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", () => {
        it("should transform 42 to 'i' and 'j'", () => {
            const message = "42423335";
            const actual = polybius(message, false);

            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
        it("should decode a message by transforming each letter into numbered pairs", () => {
            const message = "23113121434352";
            const actual = polybius(message, false);
            const expected = "macbook";

            expect(actual).to.equal(expected);
        });
        it("should return false if the length of all the numbers is odd", () => {
            const message = "215422 5511535351245";
            const actual = polybius(message, false);

            expect(actual).to.be.false;
        });
    });
});