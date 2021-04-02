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
                <b-col md="3">
                    <b-form-select v-model="select" :options="animales"></b-form-select>
                    <p>Seleccion: {{select}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                    <p>Radio: {{radio}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
                    <p>Multiple: {{check}}</p>
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
            texto: '',
            check: [],
            radio: null,
            select: null,
            animales: [
                {value: null, text: "Selecciona un animal"},
                {value: 'perro', text: "Guau guau"},
                {value: 'gato', text: "Miau miau"},
                {value: 'pato', text: "cuak cuak"}
            ],
            animalesRadio: [
                {value: 'perro', text: "Guau guau"},
                {value: 'gato', text: "Miau miau"},
                {value: 'pato', text: "cuak cuak"}
            ]
        }
    },
    computed: {
        comprobar(){
            return this.texto.length < 3 ? false : true
        }
    }
}
</script>