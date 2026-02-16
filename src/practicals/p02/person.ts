export class Person {
    public firstname:string = ""
    public lastname:string = ""
    private Age:number = 0
    public static readonly COUNTRY:string = "Thailand"

    public setAge(age:number):void{
        this.Age = age
    }

    public getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }

    public getAge(){
        return this.Age
    }
}