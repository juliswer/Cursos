enum role {
    estudiante, 
    profesor
};

let persona = {
    nombre: 'Rodrigo',
    edad: 35,
    direccion: {
        calle: 'Los presidentes',
        comuna: 'Santiago'
    },
    cursos: ['Flutter', 'Patrones de design', 'SQL'],
    role: role.estudiante
};

console.log(persona);