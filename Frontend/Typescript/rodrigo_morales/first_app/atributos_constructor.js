var Vehicle1 = /** @class */ (function () {
    function Vehicle1(brandName, model, color) {
        this.brandName = brandName;
        this.model = model;
        this.color = color;
    }
    Vehicle1.prototype.drive = function () {
        console.log("Counduciendo un " + this.brandName + " modelo " + this.model + " de color " + this.color);
    };
    return Vehicle1;
}());
var vehicle2 = new Vehicle1("mazda", "3", "rojo");
// vehicle.brandName = "toyota"; 
vehicle2.drive();
