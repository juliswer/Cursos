class Animal {
    constructor(especie,edad,color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info) + "<br>";
    }
    ladrar(){
        if (this.especie == "perro"){
            document.write("Waw");
        } else {
            document.write("NO puede ladrar, ya que es un " + this.especie + "<br>");
        }
    }
}

class Perro extends Animal {
constructor(especie,edad,color,raza){
        super(especie,edad,color,raza);
        this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro ("perro", 5, "marron", "doberman");
let perro = new Perro ("perro", 5, "marron", "pittbull")
let gato = new Animal ("gato", 2, "negro");
let pajaro = new Animal ("pajaro", 1, "verde");

perro.modificarRaza = "Pedro";
document.write(perro.raza);