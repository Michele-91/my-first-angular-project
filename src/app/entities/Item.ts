export class Item {

    name: string;
    inStock: boolean;
    price: number;

    constructor(initialData: any) {
        this.name = initialData.name;
        this.inStock = initialData.inStock;
        this.price = initialData.price;
    }
}
