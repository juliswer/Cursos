var Vehicle = /** @class */ (function () {
    function Vehicle(b) {
        this.brandName = b;
    }
    Vehicle.prototype.drive = function () {
        console.log("Counduciendo un " + this.brandName);
    };
    return Vehicle;
}());
var vehicle = new Vehicle("mazda");
vehicle.drive();
// console.log(vehicle);
var motorcycle = {
    drive: vehicle.drive
};
console.log(motorcycle.drive());
