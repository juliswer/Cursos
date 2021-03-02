let materias = {
    fisica: ["Perez","pedro", "juan", "pepito", "dalto"],
    programacion: ["Dalto","pedro", "juan", "pepito", "dalto"],
    logica: ["Hernandez","pedro", "juan", "pepito", "dalto"],
    quimica: ["Rodriguez ","pedro", "juan", "pepito", "dalto"]
}

const inscribir = (personas,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21){
        document.write(`lo siento ${personas}, las clases de ${materia} ya estan llenas`)
    } else {
        personas.push(personas);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if (materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if (materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        }
        else if (materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
        }
        document.write(`FElicidades ${alummno}, te has inscripto a ${materia} correctamente`)
    } 
}

document.write(materias['fisica'])

inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");
inscribir("pedrito", "fisica");

document.write(materias['fisica']);