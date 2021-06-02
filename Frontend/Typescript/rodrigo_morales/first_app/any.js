var role;
(function (role) {
    role[role["estudiante"] = 0] = "estudiante";
    role[role["profesor"] = 1] = "profesor";
})(role || (role = {}));
;
var persona = {
    nombre: 'Rodrigo',
    edad: 35,
    direccion: {
        calle: 'Los presidentes',
        comuna: 'Santiago'
    },
    cursos: ['Flutter', 'Patrones de design', 'SQL'],
    role: role.estudiante
};
var hobbies = ['Futbol', 1, 'Leer', false];
console.log(persona);
