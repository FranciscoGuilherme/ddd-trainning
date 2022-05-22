export default class OrderItem {
    _id: string;
    _name: string;
    _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;

        this.validate();
    }

    validate() {
        if (this._price <= 0) {
            throw new Error("Price is required");
        }
    }
}