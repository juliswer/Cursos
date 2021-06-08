class Vehicle1 {
    private brandName: string;
    private model: string;
    private color: string;

    constructor(b: string, model: string, color: string){
        this.model = model;
        this.color = color;
        this.brandName = b;
    }

    drive(){
        console.log(`Counduciendo un ${this.brandName} modelo ${this.model} de color ${this.color}`);
        
    }
}

const vehicle2 = new Vehicle("mazda", "3", "rojo");
// vehicle.brandName = "toyota"; 
vehicle.drive();
