console.log(process.argv);

function param(p){
    var index = process.argv.indexOf(p);
    // console.log(index);
    return process.argv[index];
}

var nombre = param('--nombre');
var edad = param('--edad');
console.log(param('--nombre'));
console.log(`Tu nombre es ${nombre}, y tienes ${edad} years`);