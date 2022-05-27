import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
  it("should calculate total of all orders", () => {
    const item1 = new OrderItem("oi1", "pencil", 5, "p1", 2);
    const item2 = new OrderItem("oi2", "mouse", 30, "p2", 2);
    const item3 = new OrderItem("oi3", "keyboard", 100, "p3", 1);
    const order1 = new Order("o1", "c1", [item1, item2]);
    const order2 = new Order("o1", "c1", [item3]);

    const total = OrderService.totalOrderPrice([order1, order2]);

    expect(total).toBe(170);
  });
});
