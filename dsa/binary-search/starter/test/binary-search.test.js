const { expect } = require("chai");
const binarySearch = require("../src/binary-search");

describe("Binary Search", () => {
  it("should return the correct index when the target is found", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).to.equal(2);
  });

  it("should return -1 when the target is not found", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    const result = binarySearch(arr, target);
    expect(result).to.equal(-1);
  });

  it("should handle an empty array", () => {
    const arr = [];
    const target = 1;
    const result = binarySearch(arr, target);
    expect(result).to.equal(-1);
  });

  it("should return the correct index when the target is the first element", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 1;
    const result = binarySearch(arr, target);
    expect(result).to.equal(0);
  });

  it("should return the correct index when the target is the last element", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).to.equal(4);
  });

  it("should handle a single-element array where the target is found", () => {
    const arr = [1];
    const target = 1;
    const result = binarySearch(arr, target);
    expect(result).to.equal(0);
  });

  it("should handle a single-element array where the target is not found", () => {
    const arr = [1];
    const target = 2;
    const result = binarySearch(arr, target);
    expect(result).to.equal(-1);
  });

  it("should handle duplicate elements and return the first occurrence", () => {
    const arr = [1, 2, 2, 2, 3];
    const target = 2;
    const result = binarySearch(arr, target);
    expect(result).to.equal(2); // Index of the first occurrence
  });

  it("should handle large arrays and return the correct index", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i + 1); // [1, 2, ..., 1000]
    const target = 500;
    const result = binarySearch(arr, target);
    expect(result).to.equal(499);
  });

  it("should handle negative numbers in the array", () => {
    const arr = [-10, -5, 0, 5, 10];
    const target = -5;
    const result = binarySearch(arr, target);
    expect(result).to.equal(1);
  });

  it("should handle arrays with all negative numbers", () => {
    const arr = [-10, -8, -6, -4, -2];
    const target = -4;
    const result = binarySearch(arr, target);
    expect(result).to.equal(3);
  });
});
