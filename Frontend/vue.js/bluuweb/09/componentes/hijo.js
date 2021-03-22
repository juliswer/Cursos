Vue.component('hijo', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h4 class="ms-5">Componente hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return {
            nombre: 'pepe'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    }
})