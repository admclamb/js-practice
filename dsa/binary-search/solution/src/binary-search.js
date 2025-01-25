/**
 * Performs binary search on a sorted array.
 * @param {number[]} arr - The sorted array to search.
 * @param {number} target - The target value to search for.
 * @returns {number} The index of the target value if found, otherwise -1.
 */
function binarySearch(arr, target) {
  if (!arr.length) {
    return -1;
  }

  let lowerIndex = 0;
  let higherIndex = arr.length - 1;

  while (lowerIndex <= higherIndex) {
    const middleIndex = Math.floor((lowerIndex + higherIndex) / 2);

    const value = arr[middleIndex];

    if (value === target) {
      return middleIndex;
    }

    if (value < target) {
      lowerIndex = middleIndex + 1;
    }

    if (value > target) {
      higherIndex = middleIndex - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
