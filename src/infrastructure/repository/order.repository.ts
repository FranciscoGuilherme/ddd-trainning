import { Order } from "sequelize/types";
import OrderInterface from "../../domain/repository/order-repository.interface";

export default class OrderRepository implements OrderInterface {
  async create(entity: Order): Promise<void> {
    throw new Error("");
  }

  async update(entity: Order): Promise<void> {
    throw new Error("");
  }

  async find(id: string): Promise<Order> {
    throw new Error("");
  }

  async findAll(): Promise<Order[]> {
    throw new Error("");
  }
}
