const app = Vue.createApp({
    data() {
        return {
            name: 'Mariia',
            age: 29,
            random: Math.random().toFixed(1),
            image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',

        };
    },
    methods: {
        calcAge() {
            return this.age + 5;
        }
    }
});
app.mount('#assignment');