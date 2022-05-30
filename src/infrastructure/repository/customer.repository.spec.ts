import { Sequelize } from "sequelize-typescript";
import Address from "../../domain/entity/address";
import Customer from "../../domain/entity/customer";
import CustomerModel from "../db/sequelize/model/customer.model";
import CustomerRepository from "./customer.repository";

describe("Customer repository tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: 'memory',
      logging: false,
      sync: { force: true }
    });

    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("c1", "Customer 1");
    const address = new Address("Street", 10, "02343-098", "City");
    customer.address = address;

    await customerRepository.create(customer);
    const customerModel = await CustomerModel.findOne({ where: { id: "c1" } });

    expect(customerModel.toJSON()).toStrictEqual({
      id: "c1",
      name: "Customer 1",
      street: "Street",
      number: 10,
      zip: "02343-098",
      city: "City",
      active: false,
      rewardPoints: 0
    })
  });
});