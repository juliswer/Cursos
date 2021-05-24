const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('eventoCustom', (mensaje, status) => {
    console.log(`${status}: ${mensaje}`);
});

emitter.emit('eventoCustom', 'Mensaje cargado con exito', 200);

const eventEmitter = require('events').EventEmitter;
var Persona = function(nombre) {
    this.nombre = nombre;
}

let persona = new Persona('Bob');

console.log(`Me llamo ${persona}`);

const util = require('util');

util.inherits(Persona, eventEmitter);

persona.on('hablar', (mensaje) => {
    console.log(`${persona.nombre}: ${mensaje}`);
});

persona.emit('hablar', 'hola mundo');