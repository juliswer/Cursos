var Vehicle = /** @class */ (function () {
    function Vehicle(b, model, color) {
        this.model = model;
        this.color = color;
        this.brandName = b;
    }
    Vehicle.prototype.drive = function () {
        console.log("Counduciendo un " + this.brandName + " modelo " + this.model + " de color " + this.color);
    };
    return Vehicle;
}());
var vehicle = new Vehicle("mazda", "3", "rojo");
// vehicle.brandName = "toyota"; 
vehicle.drive();
