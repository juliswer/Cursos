let persona: {
    nombre:string,
    edad:number,
    direccion: {
        calle: string,
        comuna: number
    };
} = {
    nombre: 'Pepe',
    edad: 25,
    direccion: {
        calle: 'Los presidentes',
        comuna: 1414
    }
};

console.log(persona); 