class Vehicle1 {
    constructor(private brandName:string, private model: string, private color: string){
         
    }

    drive(){
        console.log(`Counduciendo un ${this.brandName} modelo ${this.model} de color ${this.color}`);
        
    }
}

const vehicle2 = new Vehicle1("mazda", "3", "rojo");
// vehicle.brandName = "toyota"; 
vehicle2.drive();
