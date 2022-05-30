import Customer from "../../domain/entity/customer";
import CustomerRepositoryInterface from "../../domain/repository/customer-repository.interface";
import CustomerModel from "../db/sequelize/model/customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {
    CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zip: entity.address.zip,
      city: entity.address.city,
      active: entity.active,
      rewardPoints: entity.rewardPoints,
    });
  }

  async update(entity: Customer): Promise<void> {
    throw new Error("");
  }

  async find(id: string): Promise<Customer> {
    throw new Error("");
  }

  async findAll(): Promise<Customer[]> {
    throw new Error("");
  }
}
