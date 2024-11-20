import { expect } from "chai";
import {
  campgrounds,
  getTotalCampsites,
  getMaxCapacity,
  getAvailableCampsites,
  getNonReservedCapacity,
  getCampsitesByView,
  getAvailableForPartyAndView,
} from "../campground.js";

describe("Campground Functions", () => {
  it("should return the total number of campsites", () => {
    expect(getTotalCampsites(campgrounds)).to.equal(5);
  });

  it("should calculate the maximum capacity of all campsites", () => {
    expect(getMaxCapacity(campgrounds)).to.equal(25);
  });

  it("should return all available campsites", () => {
    const available = getAvailableCampsites(campgrounds);
    expect(available).to.be.an("array").with.length(3);
    expect(available.map((site) => site.number)).to.have.members([1, 3, 5]);
  });

  it("should calculate the capacity of non-reserved campsites", () => {
    expect(getNonReservedCapacity(campgrounds)).to.equal(11);
  });

  it("should count campsites by view", () => {
    const viewCounts = getCampsitesByView(campgrounds);
    expect(viewCounts).to.deep.equal({ mountain: 2, lake: 2, forest: 1 });
  });

  it("should return available campsites for a given party size and view", () => {
    const availableForPartyAndView = getAvailableForPartyAndView(
      campgrounds,
      4,
      "lake"
    );
    expect(availableForPartyAndView).to.be.an("array").with.length(1);
    expect(availableForPartyAndView[0].number).to.equal(5);
  });
});
