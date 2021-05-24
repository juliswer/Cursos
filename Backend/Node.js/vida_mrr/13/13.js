const fs = require('fs');

// fs.renameSync('./13.txt', './131.txt');

fs.rename('./13.txt', './131.txt', (err) => {
    if(err) {
        throw (err);
    }

    console.log('El archivo fue renombrado exitosamente');
});

fs.unlinkSync('./13.txt');
console.log('Eliminando archivo');