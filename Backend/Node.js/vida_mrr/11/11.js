const fs = require('fs');

const archivo = './11.txt';

// validar si existe un archivo

if(fs.existsSync(archivo)){
    console.log('El archivo existe');
} else {
    console.log('El archivo no existe');
}

fs.access(archivo, fs.constants.F_OK, (err) => {
    if(err) {
        console.log("El archivo no existe");
    } else {
        console.log("El archivo si existe");
    }
});

const contentido = 'Este es el contenido de un texto';

fs.writeFile(archivo, contentido, () => {
    console.log('Se ha escrito en el archivo');
});

/*fs.write(archivo, contentido, (err) => {
    if (err) throw("Hubo un error al escribir en el archivo");
    console.log("Se ha escrito en el archivo");
});*/

const textoAdicional = '\nAqui va otra linea de codigo';

fs.appendFile(archivo, textoAdicional, (err) => {
    if(err) throw('No se pudo adjuntar mas texto');

    console.log('Se ha adjuntado mas informacion...');
});