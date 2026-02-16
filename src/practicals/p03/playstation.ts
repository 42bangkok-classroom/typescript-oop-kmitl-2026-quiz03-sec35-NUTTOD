import { Product } from './product'

export class Playstation extends Product {
  // TODO: implement class properties, constructor with super(...), and methods
  private generation:number = 0;

  constructor(name:string, generation:number, price:number){
    super(name, price)
    this.generation = generation
  }

  getProfile():string{
    return `${this.name} (Gen ${this.generation})`
  }

  getDiscountPrice():number{
    return this.price - (this.price * 10/100)
  }
}