<template>
  <base-container title="Vuex" v-if="isAuth">
<!--    <h3>{{counter}} app</h3>-->
    <TheCounter/>
    <favourite-value></favourite-value>
    <button @click="addOne">Add 10</button>
    <ChangeCounter/>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from '@/components/ChangeCounter.vue';
import UserAuth from '@/components/UserAuth.vue';
import FavouriteValue from '@/components/FavouriteValue.vue';

export default {
  components: {
    FavouriteValue,
    BaseContainer,
    TheCounter,
    ChangeCounter,
    UserAuth,
  },
  computed:{
    isAuth(){
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods:{
    addOne(){
      // this.$store.commit('increase', {value: 10});
      //alternative way
      this.$store.dispatch({
        type: 'increase',
        value: 10
      })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
