class Vehicle {
    brandName: string;

    constructor(b: string){
        this.brandName = b;
    }

    drive(){
        console.log(`Counduciendo un ${this.brandName}`);
        
    }
}

const vehicle = new Vehicle("mazda");
vehicle.drive();
// console.log(vehicle);

let motorcycle = {
    drive: vehicle.drive
};
console.log(motorcycle.drive());