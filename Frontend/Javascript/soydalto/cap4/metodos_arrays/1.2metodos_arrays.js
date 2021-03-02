let numeros = [1,2,3,4,5,6]

numeros.filter((numero) => {
    document.write(numero + "<br>")
});

resultado = numeros.filter(numero => numero.length > 4)

document.write(resultado);