import { Sequelize } from "sequelize-typescript";
import Order from "../../domain/checkout/entity/order";
import OrderItem from "../../domain/checkout/entity/order_item";
import Customer from "../../domain/customer/entity/customer";
import Address from "../../domain/customer/value-object/address";
import Product from "../../domain/product/entity/product";
import CustomerModel from "../db/sequelize/model/customer.model";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";
import ProductModel from "../db/sequelize/model/product.model";
import CustomerRepository from "./customer.repository";
import OrderRepository from "./order.repository";
import ProductRepository from "./product.repository";

describe("Order repository tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })

    sequelize.addModels([
      CustomerModel,
      OrderModel,
      OrderItemModel,
      ProductModel
    ])
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a order", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("c1", "Customer 1");
    const address = new Address("Street", 10, "00000-000", "City");
    customer.address = address;
    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("p1", "Product 1", 100);
    await productRepository.create(product);

    const orderRepository = new OrderRepository();
    const orderItem = new OrderItem("i1", 
      product.name,
      product.price,
      product.id,
      1
    );

    const order = new Order("o1", customer.id, [orderItem]);
    await orderRepository.create(order);
    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ["items"]
    })

    expect(orderModel.toJSON()).toStrictEqual({
      id: order.id,
      customer_id: order.customerId,
      items: [
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          product_id: orderItem.productId,
          quantity: orderItem.quantity,
          order_id: order.id,
        }
      ],
      total: order.total()
    });
  });

  it("should update a order", async () => {});

  it("should find a order", async () => {});

  it("should find all orders", async () => {});
});
