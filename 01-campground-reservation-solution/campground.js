/**
 * @typedef {Object} Campground
 * @property {number} number - The unique ID of the campsite.
 * @property {string} view - The type of view for the campsite (e.g., "mountain", "lake").
 * @property {number} partySize - The maximum number of people the campsite can accommodate.
 * @property {boolean} isReserved - Indicates whether the campsite is currently reserved.
 */

/** @type {Campground[]} */
export const campgrounds = [
  { number: 1, view: "mountain", partySize: 4, isReserved: false },
  { number: 2, view: "lake", partySize: 6, isReserved: true },
  { number: 3, view: "forest", partySize: 2, isReserved: false },
  { number: 4, view: "mountain", partySize: 8, isReserved: true },
  { number: 5, view: "lake", partySize: 5, isReserved: false },
];

/**
 * Get the total number of campsites.
 * @param {Campground[]} campgrounds - The array of campgrounds.
 * @returns {number} The total number of campsites.
 */
export function getTotalCampsites(campgrounds) {
  return campgrounds.length;
}

/**
 * Get the total maximum capacity across all campsites.
 * @param {Campground[]} campgrounds - The array of campgrounds.
 * @returns {number} The maximum number of people that can be hosted.
 */
export function getMaxCapacity(campgrounds) {
  return campgrounds.reduce((acc, curr) => acc + curr.partySize, 0);
}

/**
 * Get all campsites that are available for reservation.
 * @param {Campground[]} campgrounds - The array of campgrounds.
 * @returns {Campground[]} The available campsites.
 */
export function getAvailableCampsites(campgrounds) {
  return campgrounds.filter((campground) => !campground.isReserved);
}

/**
 * Get the total capacity of non-reserved campsites.
 * @param {Campground[]} campgrounds - The array of campgrounds.
 * @returns {number} The total capacity of non-reserved campsites.
 */
export function getNonReservedCapacity(campgrounds) {
  return campgrounds.reduce((acc, curr) => {
    if (!curr.isReserved) {
      return acc + curr.partySize;
    }

    return acc;
  }, 0);
}

/**
 * Count the number of campsites for each view type.
 * @param {Campground[]} campgrounds - The array of campgrounds.
 * @returns {Object<string, number>} An object where keys are view types and values are counts.
 */
export function getCampsitesByView(campgrounds) {
  return campgrounds.reduce((acc, curr) => {
    acc[curr.view] = (acc[curr.view] ?? 0) + 1;
    return acc;
  }, {});
}

/**
 * Get campsites that are available for a given party size and view.
 * @param {Campground[]} campgrounds - The array of campgrounds.
 * @param {number} partySize - The required party size.
 * @param {string} view - The required view type.
 * @returns {Campground[]} The available campsites that match the criteria.
 */
export function getAvailableForPartyAndView(campgrounds, partySize, view) {
  return campgrounds.filter(
    (camp) =>
      !camp.isReserved && camp.partySize >= partySize && camp.view === view
  );
}
