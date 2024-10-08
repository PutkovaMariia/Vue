const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            //fullName: '',
            lastName: '',
        };
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = '';
        }
    },
    computed: {
        fullName() {
            if (this.name === '' || this.lastName === '') {
                return '';
            }
            return this.name + ' ' + this.lastName;
        }
    },
    watch: {
        counter(value){
            if (value > 50){
                const that = this;
                setTimeout(function (){
                    that.counter = 0;
                }, 2000);
            }
        }
        // name(value) {
        //     if (value === '') {
        //         this.fullName = '';
        //     } else {
        //         this.fullName = value + ' ' + this.lastName;
        //     }
        // },
        // lastName(value){
        //     if (value === '') {
        //         this.fullName = '';
        //     } else {
        //         this.fullName = this.name + ' ' + value;
        //     }
        // }
    }
});

app.mount('#events');
