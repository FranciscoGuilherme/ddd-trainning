import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw Error when Id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw Error when Id is empty", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Items quantity must be greater than 0");
  });

  it("should create a order with success", () => {
    expect(() => {
      let order = new Order("", "123", [
        new OrderItem("i1", "Item 1", 10),
        new OrderItem("i2", "Item 2", 10),
      ]);
    });
  });

  it("should calculate total", () => {
    const item = new OrderItem("i1", "Item 1", 100);
    const order = new Order("123", "123", [item]);
    const total = order.total();

    expect(total).toBe(100);
  });
});
