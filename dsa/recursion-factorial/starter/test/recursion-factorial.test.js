const { expect } = require("chai");
const factorial = require("../src/recursion-factorial");

describe("Factorial Function", () => {
  it("should return 1 for 0! (base case)", () => {
    const result = factorial(0);
    expect(result).to.equal(1);
  });

  it("should return 1 for 1! (base case)", () => {
    const result = factorial(1);
    expect(result).to.equal(1);
  });

  it("should return 2 for 2!", () => {
    const result = factorial(2);
    expect(result).to.equal(2);
  });

  it("should return 6 for 3!", () => {
    const result = factorial(3);
    expect(result).to.equal(6);
  });

  it("should return 24 for 4!", () => {
    const result = factorial(4);
    expect(result).to.equal(24);
  });

  it("should return 120 for 5!", () => {
    const result = factorial(5);
    expect(result).to.equal(120);
  });

  it("should handle larger inputs correctly", () => {
    const result = factorial(10);
    expect(result).to.equal(3628800);
  });

  it("should throw an error for negative inputs", () => {
    expect(() => factorial(-1)).to.throw(
      "Input must be a non-negative integer"
    );
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => factorial(2.5)).to.throw(
      "Input must be a non-negative integer"
    );
  });
});
