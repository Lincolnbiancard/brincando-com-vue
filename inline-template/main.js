Vue.component('progresso', {
    data() {
        return {
            percentagem: 0
        }
    },
    methods: {
        Add10(){
            if(this.percentagem <= 90){
                this.percentagem += 10;
            }else {
                this.percentagem = 0;
            }
        }
    },
});

new Vue({
    el: '#root',
});