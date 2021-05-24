const Persona = require('./08.1');

let pablo = new Persona('Pablo');

pablo.on('habla', (mensaje) => {
    console.log(`${pablo.nombre}: ${mensaje}`);
});

pablo.emit('habla','Hoy va a ser un gran dia');