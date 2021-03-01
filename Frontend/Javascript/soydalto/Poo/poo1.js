class animal {
    constructor(especie,edad,color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
}

let perro = new animal ("perro", 5, "marron")
let gato = new animal ("gato", 2, "negro");
let pajaro = new animal ("pajaro", 1, "verde");

document.write(perro.info + "<br>")
document.write(gato.info + "<br>")
document.write(pajaro.info + "<br>")