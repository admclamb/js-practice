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
});
