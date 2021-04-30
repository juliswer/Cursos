"strict mode";

const validarEdad = () => {
    let edad;
    try {
        if (msg) edad = prompt(msg);
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "introduce un numero para la edad";
        if (edad > 18) console.log("Sos mayor de edad");
        else console.log("sos menor de edad");
    } catch(e){
        validarEdad(e)
    }
}

validarEdad()