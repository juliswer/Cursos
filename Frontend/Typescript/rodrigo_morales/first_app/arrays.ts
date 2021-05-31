let persona2 = {
    nombre: 'Rodrigo',
    edad: 34,
    direccion: {
        calle: 'Los presidentes',
        comuna: 'santiago'
    },
    cursos: ['Flutter', 'Patrones de diseno', 'SQL']
};

let hobbies:string[];
hobbies = ['Futbol', 'Programacion', 'Leer', 'Escuchar musica'];

hobbies.sort();
hobbies.pop();

for(const hobbie of hobbies){
    console.log(hobbie.toUpperCase());
}

console.log(persona2);
console.log(hobbies);