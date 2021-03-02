const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","pedro", "juan", "pepito", "dalto"],
        programacion: ["Dalto","pedro", "juan", "pepito", "dalto"],
        logica: ["Hernandez","pedro", "juan", "pepito", "dalto"],
        quimica: ["Rodriguez ","pedro", "juan", "pepito", "dalto"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInfo = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if (informacion !== false){
        let profesor = informacion(materia)[0][0];
        alumnos = informacion(materia)[0]
        alumnos.shift(); 
        document.write(`El profesor de <b>${informacion[1]}</b>
        : <b style="color:red">${profesor}</b><br>
        Los alumnos son: <b style="color: blue">${alumnos}</b><br><br>`);  
    };
}

const cantidadClases =  (alumno)=> {
    let informacion = obtenerInformacion(materia)
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if(informacion[2][info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `<b style= 'color: blue'>${alumno}</b> esta en ${cantidadTotal} clases </b>: Esta cursando las clases: <b style='color: green'>${clasesPresentes}</b><br><br>
    `;
}

mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");
document.write(cantidadClases("dalto"));