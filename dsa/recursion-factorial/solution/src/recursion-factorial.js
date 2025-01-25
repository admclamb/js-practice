/**
 * Calculates the factorial of a non-negative integer.
 *
 * A factorial is the product of all positive integers less than or equal to `n`.
 * For example:
 * - 0! = 1
 * - 1! = 1
 * - 5! = 5 * 4 * 3 * 2 * 1 = 120
 *
 * @param {number} n - A non-negative integer whose factorial is to be calculated.
 * @returns {number} The factorial of the given number.
 * @throws {Error} If the input is not a non-negative integer.
 */
function factorial(n) {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

module.exports = factorial;
