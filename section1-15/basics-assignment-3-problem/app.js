const app = Vue.createApp({
    data() {
        return {
            sum: 0,
        }
    },
    methods: {
        calc(num) {
            this.sum = this.sum + num;
        }
    },
    computed: {
        result() {
            if (this.sum < 37) {
                return 'Not there yet';
            } else if (this.sum > 37) {
                return 'Too much';
            } else {
                return this.sum;
            }
        }
    },
    watch: { //triggers when gets a new value
        result(value) {
            const that = this;
            setTimeout(function () {
                that.sum = 0;
            }, 5000);
        }
    }
});
app.mount('#assignment');