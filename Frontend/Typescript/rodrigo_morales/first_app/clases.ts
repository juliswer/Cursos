class Vehicle {
    brandName: string;

    constructor(b: string){
        this.brandName = b;
    }
}

const vehicle = new Vehicle("mazda");
console.log(vehicle);