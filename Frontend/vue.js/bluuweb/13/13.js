Vue.component('titulo', {
    template: //html
    `
    <div>
        <h1>numero {{numero}}</h1>
        <hijo></hijo>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    }
});

Vue.component('hijo', {
   template: //html
   `
   <div>
        <button @click="aumentar">+</button>
        <button @click="disminuir(2)">-</button>
        <button @click="obtenerCursos">Obtener Cursos</button>
        <h1>numero {{numero}}</h1>
        <ul v-for="item of cursos">
            <li>{{item.nombre}}</li>
        </ul>
    </div>
   `,
   computed: {
        ...Vuex.mapState(['numero', 'cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    }
});

const store = new Vuex.Store({
    state: {
        numero: 10,
        cursos: []
    },
    mutations: {
        aumentar(state){
            state.numero ++
        },
        disminuir(state, n){
            state.numero -= n
        },
        llenarCursos(state, cursosAccion){
            state.cursos = cursosAccion
        }
    },
    actions: {
        obtenerCursos: async function ({ commit }){
            const data = await fetch('13.json');
            const cursos = await data.json();
            commit('llenarCursos', cursos)
        }
    }
})

new Vue({
    el: '#app',
    store
})