import { expect } from "chai";
import {
  inventory,
  getCandyTypes,
  getTotalCandiesInStock,
  addNewCandy,
  shouldOrderCandy,
  calculateCandyOrder,
  calculateTotalCandyOrder,
} from "../inventory.js";

describe("Inventory Functions", () => {
  it("should return the total number of candy types", () => {
    const types = getCandyTypes(inventory);
    console.log("Candy types:", types);
    expect(types).to.equal(3);
  });

  it("should return the total number of candies in stock", () => {
    const totalStock = getTotalCandiesInStock(inventory);
    console.log("Total candies in stock:", totalStock);
    expect(totalStock).to.equal(180);
  });

  it("should add a new candy to the inventory", () => {
    const newCandy = { candy: "Candy Cane", inStock: 20, weeklyAverage: 15 };
    addNewCandy(inventory, newCandy);
    console.log("Updated inventory:", inventory);
    expect(inventory).to.include.deep.members([newCandy]);
  });

  it("should determine if a candy needs to be ordered", () => {
    const candy = { candy: "Chocolate Bar", inStock: 10, weeklyAverage: 20 };
    const needsOrdering = shouldOrderCandy(candy);
    console.log("Should order candy:", needsOrdering);
    expect(needsOrdering).to.be.true;
  });

  it("should calculate how much of a candy to order this week", () => {
    const candy = { candy: "Chocolate Bar", inStock: 10, weeklyAverage: 20 };
    const orderAmount = calculateCandyOrder(candy);
    console.log("Candy order amount:", orderAmount);
    expect(orderAmount).to.equal(10);
  });

  it("should calculate the total number of candies to order this week", () => {
    const totalOrder = calculateTotalCandyOrder(inventory);
    console.log("Total candy order:", totalOrder);
    expect(totalOrder).to.be.a("number");
  });
});
