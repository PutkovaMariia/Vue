<script>
import {mapGetters} from 'vuex';

export default {
  computed:{
    // counter(){
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters('numbers', ['finalCounter'])
  },
}
</script>

<template>
<h3>{{finalCounter}} counter</h3>
</template>

<style scoped>

</style>
