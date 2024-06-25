const app = Vue.createApp({
    data(){
        return{
            userInput: '',
            pSelected: true,
            userColor: '',
        };
    },
    methods:{
        getInput(event){
            this.userInput = event.target.value;
        },
        toggleP() {
            this.pSelected = !this.pSelected;
        },
        getColor(event){
            this.userColor = event.target.value;
        }
    }
});
app.mount('#assignment');