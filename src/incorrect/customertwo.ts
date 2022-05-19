class Customertwo {
    _id: string;
    _name: string = "";
    _address: string = "";

    constructor(id: string) {
        this._id = id;
    }
}

let customertwo = new Customertwo("123");
