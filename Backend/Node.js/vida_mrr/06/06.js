var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);


rl.question('Cual es tu nombre?', (respuesta) => {
    console.log(`Hola, ${respuesta}`);
    process.exit();
})

var persona = {
    nombre: '',
    comentarios: []
};

rl.question('Cual es tu nombre?', (respuesta) => {
    persona.nombre = respuesta;
    rl.setPrompt('Dime un comentario');
    rl.promt();
})

rl.on('line', (input) => {
    if(input.trim() === 'salir'){
        process.exit();
    }
    persona.comentarios.push(input.trim());
    rl.prompt();
});