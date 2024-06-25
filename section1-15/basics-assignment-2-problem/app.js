const app = Vue.createApp({
    data(){
        return{
            input1: '',
            input2: '',
        }
    },
    methods:{
        alert(){
            alert(`it's alive!`)
        },
        getInput1(event){
            this.input1 = event.target.value;
        },
        getInput2(event){
            this.input2 = event.target.value;
        },
    }
});
app.mount('#assignment');