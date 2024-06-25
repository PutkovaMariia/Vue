import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  //mutations are not allowed to run asynchronous code (we can, but it is a bad practice)
  mutations: rootMutations,
  //actions are allowed to run asynchronous code
  actions: rootActions,
  getters: rootGetters,
});

export default store;
