<template>
    <div class="mt-5">
        <h1>Formularios</h1>

        <form>
            <b-row>
                <b-col md="6">
                    <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                    <small>Minimo 3 caracteres</small>
                    <p>Texto: {{texto}}</p>
                </b-col>
                <b-col md="6">
                    <b-form-input type="password" v-model="texto" :state="comprobar"></b-form-input>
                    <p>Texto: {{texto}}</p>
                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return{
            texto: ''
        }
    },
    computed: {
        comprobar(){
            return this.texto.length < 3 ? false : true
        }
    }
}
</script>