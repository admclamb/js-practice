/**
 * @typedef {Object} Candy
 * @property {string} candy - The name of the candy.
 * @property {number} inStock - The number of this candy currently in stock.
 * @property {number} weeklyAverage - The average weekly sales of this candy.
 */

/** @type {Candy[]} */
export const inventory = [
  { candy: "Chocolate Bar", inStock: 50, weeklyAverage: 20 },
  { candy: "Gummy Bears", inStock: 30, weeklyAverage: 25 },
  { candy: "Lollipop", inStock: 100, weeklyAverage: 40 },
];

/**
 * Get the total number of candy types in the inventory.
 * @param {Candy[]} inventory - The inventory array of candy objects.
 * @returns {number} The total number of candy types.
 */
export function getCandyTypes(inventory) {
  return inventory.length;
}

/**
 * Get the total number of candies in stock.
 * @param {Candy[]} inventory - The inventory array of candy objects.
 * @returns {number} The total number of candies in stock.
 */
export function getTotalCandiesInStock(inventory) {
  return inventory.reduce((acc, curr) => acc + curr.inStock, 0);
}

/**
 * Add a new candy to the inventory.
 * @param {Candy[]} inventory - The inventory array of candy objects.
 * @param {Candy} newCandy - The candy object to add.
 */
export function addNewCandy(inventory, newCandy) {
  inventory.push(newCandy);
}

/**
 * Check if a candy needs to be ordered.
 * @param {Candy} candy - A candy object.
 * @returns {boolean} `true` if the candy should be ordered, otherwise `false`.
 */
export function shouldOrderCandy(candy) {
  return candy.inStock < candy.weeklyAverage;
}

/**
 * Calculate how much of a specified candy to order this week.
 * @param {Candy} candy - A candy object.
 * @returns {number} The quantity to order.
 */
export function calculateCandyOrder(candy) {
  return candy.weeklyAverage - candy.inStock;
}

/**
 * Calculate the total number of candies to order this week.
 * @param {Candy[]} inventory - The inventory array of candy objects.
 * @returns {number} The total quantity to order.
 */
export function calculateTotalCandyOrder(inventory) {
  return inventory.reduce((acc, curr) => calculateCandyOrder(curr) + acc, 0);
}
