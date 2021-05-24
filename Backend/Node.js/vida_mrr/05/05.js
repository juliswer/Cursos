var path = require('path');
console.log(path.basename(__filename));
console.log(path.join(__dirname, 'www', 'img', 'home', 'uploads'));

var util = require('util');
var nombre = "Marcos";
var edad = 25;
var texto = util.format("Hola %s, tienes $d anios", nombre, edad);
util.log("hola");
console.log(texto);

var v8 = require('v8');
console.log(v8.getHeapStatistics());