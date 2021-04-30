"strict mode";

const suma = (...num) => {
    let resultado = 0
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];
    }
    console.log(resultado);
}

suma(12,23,24)