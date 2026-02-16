export class Student {
    public firstname:string = ""
    public lastname:string = ""

    printName():void {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}
