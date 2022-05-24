import Product from './product'

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const product = new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });

  it("should create a new product with success", () => {
    const product = new Product("123", "Product 1", 100);
    expect(product.validate()).toBeTruthy();
  });
});
