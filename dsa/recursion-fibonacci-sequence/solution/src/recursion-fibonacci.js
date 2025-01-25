/**
 * Calculates the n-th Fibonacci number using recursion.
 *
 * The Fibonacci sequence is defined as:
 * - F(0) = 0
 * - F(1) = 1
 * - F(n) = F(n-1) + F(n-2) for n > 1
 *
 * @param {number} n - A non-negative integer representing the position in the Fibonacci sequence.
 * @returns {number} The n-th Fibonacci number.
 * @throws {Error} If the input is not a non-negative integer.
 */
function fibonacci(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Input must be a non-negative integer");
  }
  if (n === 0 || n === 1) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

module.exports = fibonacci;
