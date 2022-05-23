import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("should throw Error when id is empty", () => {
    expect(() => {
      const customer = new Customer("", "Francisco");
    }).toThrowError("Id is required");
  });

  it("should throw Error when name is empty", () => {
    expect(() => {
      const customer = new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("123", "Francisco");
    customer.changeName("Guilherme");
    expect(customer.name).toBe("Guilherme");
  });

  it("should activate customer", () => {
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1", 123, "13330-250", "São Paulo");
    customer.Address = address;
    customer.activate();

    expect(customer.isActive()).toBeTruthy();
  });

  it("should throw error when trying to activate customer", () => {
    expect(() => {
      const customer = new Customer("123", "Customer 1");
      customer.activate();
    }).toThrowError("Address is mandatory to active a customer");
  });

  it("should activate customer", () => {
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1", 123, "13330-250", "São Paulo");
    customer.Address = address;
    customer.activate();

    expect(customer.isActive()).toBeTruthy();

    customer.deactivate();

    expect(customer.isActive()).toBeFalsy();
  });
});
