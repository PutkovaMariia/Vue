<template>
  <base-container title="Vuex">
    <h3>{{counter}} app</h3>
    <TheCounter/>
    <button @click="addOne">Add 10</button>
    <ChangeCounter/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from '@/components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  computed:{
    counter(){
      return this.$store.state.counter
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
