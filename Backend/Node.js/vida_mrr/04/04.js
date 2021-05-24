var nombre;
var preguntas = ['Cual es tu nombre?, Cuantos anios tienes?, Lenguaje de programacion favorito??'];
var respuestas = [];

function pregunta (i) {
    process.stdout.write(preguntas[i]);
}

process.stdout.write("Dime tu nombre: \n");
process.stdin.on('data', (data) => {
    nombre = data.toString().trim();
    process.stdout.write(`Hola ${nombre}! \n`);
    process.exit();
})

process.stdin.on('data', (data) => {
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    } else {
        process.exit();
    }
})

pregunta(0);