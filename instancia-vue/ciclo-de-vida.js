new Vue({
    el: "#app",
    data: {
        titulo: 'Ciclo de Vida'
    },
    beforeCreated() {
        console.log('Antes de criar')
    },
    created() {
        console.log('Criado')
    },
    beforeMount() {
        console.log('Antes de montar (DOM)')
    },
    mounted() {
        console.log('DOM Montado')
    },
    beforeUpdate() {
        console.log('Antes de Atualizar')
    },
    updated() {
        console.log('Atualizado')
    },
    el: '#app',
    template: `
        <div>
            <h1>{{ titulo }}</h1>
            <button @click="titulo += '?'">Alterar</button>
            <button @click="$destroy()">Destruir</button>
        </div>
    `,
    methods: {

    }, 
    beforeDestroy() {
        console.log('Antes de Destruir')
    },
    destroyed() {
        console.log('Destruido')
    },
})