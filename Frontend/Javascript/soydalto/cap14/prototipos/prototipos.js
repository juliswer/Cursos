let objeto = {
    "propiedad": "datos"
};

console.log(objeto);

let variable = function(){};

console.log(variable.prototype.__proto__);

let variable2 = [];

console.log(variable2); 

class objeto {
    constructor(){};
    hablar(){
        console.log("hola");
    }
}

let objeto = new objeto;

console.log(objeto);

objeto.hablar = () => {
    console.log("modificado afuera");
}

objeto.hablar()