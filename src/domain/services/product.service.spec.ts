import Product from "../product/entity/product";
import ProductService from "./product.service"

describe("Product service unit test", () => {
  it("should change the prices of all products", () => {
    const product1 = new Product("p1", "pencil", 10);
    const product2 = new Product("p2", "book", 20);
    const products = [product1, product2];

    ProductService.increasePrice(products, 100);

    expect(product1.price).toBe(20);
    expect(product2.price).toBe(40);
  });
});
