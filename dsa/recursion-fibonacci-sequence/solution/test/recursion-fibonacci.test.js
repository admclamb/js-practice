const { expect } = require("chai");
const fibonacci = require("../src/recursion-fibonacci");

describe("Fibonacci Function (Recursion)", () => {
  it("should return 0 for F(0)", () => {
    const result = fibonacci(0);
    expect(result).to.equal(0);
  });

  it("should return 1 for F(1)", () => {
    const result = fibonacci(1);
    expect(result).to.equal(1);
  });

  it("should calculate F(2) correctly", () => {
    const result = fibonacci(2);
    expect(result).to.equal(1);
  });

  it("should calculate F(3) correctly", () => {
    const result = fibonacci(3);
    expect(result).to.equal(2);
  });

  it("should calculate F(5) correctly", () => {
    const result = fibonacci(5);
    expect(result).to.equal(5);
  });

  it("should calculate F(10) correctly", () => {
    const result = fibonacci(10);
    expect(result).to.equal(55);
  });

  it("should throw an error for negative inputs", () => {
    expect(() => fibonacci(-1)).to.throw(
      "Input must be a non-negative integer"
    );
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => fibonacci(2.5)).to.throw(
      "Input must be a non-negative integer"
    );
  });
});
