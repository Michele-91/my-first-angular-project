export class Item {

    name: string;
    inStock: boolean;
    price: number;
    date: Date;

    constructor(initialData: any) {
        this.name = initialData.name;
        this.inStock = initialData.inStock;
        this.price = initialData.price;
        this.date = initialData.date;
    }
}
