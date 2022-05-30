import { Sequelize } from "sequelize-typescript";
import OrderModel from "../db/sequelize/model/order.model";

describe("Order repository tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })

    await sequelize.addModels([OrderModel])
  });

  it("should create a order", async () => {});

  it("should update a order", async () => {});

  it("should find a order", async () => {});

  it("should find all orders", async () => {});
});
