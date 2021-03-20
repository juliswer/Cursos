const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad: 0},
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Banana', cantidad: 10},
        ]
    }
})