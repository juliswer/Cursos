setTimeout(() => {
    document.write("hola")
},2000)

const temporizador = setTimeout(() => {
    document.write("hola")
},2000)

clearTimeout(temporizador);

const intervalo = setInterval(() => {
    document.write("hola")
},2000)

clearInterval(intervalo);