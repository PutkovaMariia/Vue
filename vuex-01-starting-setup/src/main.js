import { createApp } from 'vue';
import {createStore} from "vuex";

import App from './App.vue';

const store = createStore({
    state(){
        return{
            counter: 0
        };
    },
    //mutations are not allowed to run asynchronous code (we can, but it is a bad practice)
    mutations:{
        increment(state){
            setTimeout(function(){
                state.counter = state.counter + 2;
            }, 2000);
        },
        increase(state, payload){
            state.counter = state.counter + payload.value;
        }
    },
    //actions are allowed to run asynchronous code
    actions:{
        increment(context){
            //the name of the mutation that should be commited
            setTimeout(function(){
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload){
            console.log(context);
            context.commit('increase', payload);
        }
    },
    getters:{
        finalCounter(state){
            return state.counter * 3;
        },
        normalizedCounter(_, getters){
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0){
                return 0;
            }
            if (finalCounter > 100){
                return 100;
            }
            return finalCounter;
        }
    }
});
const app = createApp(App);

app.use(store);
app.mount('#app');
