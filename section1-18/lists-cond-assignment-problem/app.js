const app = Vue.createApp({
    data() {
        return {
            inputField: '',
            tasks: [],
            isHidden: false,
            btnName: 'Hide List',
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.inputField);
        },
        showHide(){
            if (this.isHidden) this.btnName = 'Hide List';
            if (!this.isHidden) this.btnName = 'Show List';
            return this.isHidden = !this.isHidden;
        }
    },
});
app.mount('#assignment');