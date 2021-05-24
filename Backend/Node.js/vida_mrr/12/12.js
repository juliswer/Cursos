const fs = require('fs');

//fs.mkdirSync('img');

/* fs.mkdir('css', function (err) {
    if(err){
        throw('Error: ' + err)
    }

    console.log('Carpeta creada.');
}); */

if(fs.existsSync('css')){
    console.log('La carpeta ya existe');
} else {
    fs.mkdir('css', function(err) {
        if(err){throw(err);}
        console.log('Carpeta creada.');
    });
}