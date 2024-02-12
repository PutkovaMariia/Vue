const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  data(){
    return{
      favouriteMeal: 'pizza'
    };
  }
});
app2.mount('#app2');
////////////
/*
//js by default is not reactive
let message = 'hello';
let longMessage = message + ' world';
console.log(longMessage);//hello world
message = 'hello !!!!!!!';
console.log(longMessage);//hello world
*/

const data = {
  message: 'hello',
  longMessage: 'hello world'
};
const handler = {
  set(target, key, value){
    if (key === 'message'){
      target.longMessage = value + ' world';
    }
    target.message = value;
  }
};
const proxy = new Proxy(data, handler);

proxy.message = 'hello!!!!!!';

console.log(proxy.longMessage);//hello!!!!!! world