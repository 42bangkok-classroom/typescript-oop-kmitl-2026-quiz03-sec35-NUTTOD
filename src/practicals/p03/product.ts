export class Product {
    public readonly name:string = ""
    protected price:number = 0
    public static readonly DISCOUNT_PERCENT:number = 10;

    constructor(name:string, price:number = 0){
        this.name = name
        this.price = price
    }

    public setPrice(price:number):void {
        this.price = price
    }

    public getPrice():number {
        return this.price
    }
}

