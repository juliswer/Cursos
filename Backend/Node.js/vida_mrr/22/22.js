const _ = require('underscore');

const lista = [
    {'id': 1, 'nombre': 'Marcos', 'edad': 27},
    {'id': 2, 'nombre': 'Lena', 'edad': 26},
    {'id': 3, 'nombre': 'Juanito', 'edad': 22}
];

const res = _.findWhere(lista, {id: 2});

console.log(res);