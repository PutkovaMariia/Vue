<script>
export default {
  computed:{
    counter(){
      return this.$store.getters['numbers/normalizedCounter'];
    }
  },
}
</script>

<template>
  <h3>{{counter}} fav</h3>
  <p>We do more...</p>
</template>

<style scoped>

</style>
