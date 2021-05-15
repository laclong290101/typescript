
function show<A, B, C>(firstName: A, lastName: B, money: C): void {
    const fullName = `${firstName} ${lastName} has ${money}`
    console.log(fullName);
};
class Product<x, y, z> {
    id: x;
    name: y;
    price: z;
    constructor(id: x, name: y, price: z) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showList<T>(list: T[]): T[] {
        return list
    };
    showInfo(): void {
        console.log(`
                id: ${this.id}
                name: ${this.name}
                price: ${this.price}
        `);
    }
};

// samsung.showList<number>([1, 2, 3]);

export default Product;