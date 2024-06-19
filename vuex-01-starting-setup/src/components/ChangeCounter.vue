<script>
import {mapActions} from 'vuex';

export default {
  methods:{
    // addOne(){
    //   this.$store.dispatch('increment');
    // },
    ...mapActions(['increment', 'increase'])
  }
}
</script>

<template>
<button @click="increment">increment</button>
<button @click="increase({value: 10})">increase (by 10)</button>
</template>

<style scoped>

</style>
